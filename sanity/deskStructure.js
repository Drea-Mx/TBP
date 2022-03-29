// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
        .title('Global Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('globalPage')
            .documentId('globalPage')
        ),
        S.listItem()
        .title('Inicio')
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
        .title('Contact')
        .icon(() => '☎️')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['homePage', 'aboutPage', 'globalPage', 'contactPage' ].includes(listItem.getId()))
    ])