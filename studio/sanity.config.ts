import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas/schema'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { dashboardTool, projectUsersWidget } from "@sanity/dashboard"
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify"

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(['homePage', 'aboutPage', 'workPage', 'globalPage', 'contactPage'])

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  title: 'the branding people',
  projectId: 'v7y3u1wl',
  dataset: 'production',

  schema: {
    types: schemaTypes.types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  plugins: [
    dashboardTool({ widgets: [
      netlifyWidget({
        title: 'Deploy Website After Changes',
        sites: [
          {
            title: 'tbp.studio',
            apiId: '88037c0d-e230-47af-9208-64b2a4eda455',
            buildHookId: '62e2fddf97d89a143f992996',
            name: 'tbpstudio',
            url: 'https://tbp.studio/',
          }
        ]
      }),
      projectUsersWidget(),
    ]}),
    deskTool({
      structure: (S, context) =>
      S.list()
        .title('Pages')
        .items([
          orderableDocumentListDeskItem({type: 'blogPage', S, context}),
          orderableDocumentListDeskItem({type: 'projectPage', S, context}),
          S.listItem()
            .title('Global Settings')
            .icon(() => '⚙️')
            .child(
              S.document()
                .schemaType('globalPage')
                .documentId('globalPage')
            ),
          S.listItem()
            .title('Home')
            .icon(() => '🏡')
            .child(
              S.document()
                .schemaType('homePage')
                .documentId('homePage')
            ),
          S.listItem()
            .title('About')
            .icon(() => '📝')
            .child(
              S.document()
                .schemaType('aboutPage')
                .documentId('aboutPage')
            ),
          S.listItem()
            .title('Work')
            .icon(() => '📸')
            .child(
              S.document()
                .schemaType('workPage')
                .documentId('workPage')
            ),
          S.listItem()
            .title('Contact')
            .icon(() => '☎️')
            .child(
              S.document()
                .schemaType('contactPage')
                .documentId('contactPage')
            ),
          S.divider(),
          ...S.documentTypeListItems().filter(listItem => !singletonTypes.has(listItem.getId()))
        ])
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
})
