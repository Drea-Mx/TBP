const
  fs = require('fs'),
  path = require('path'),
  i18next = require('i18next'),
  nodeFsBackend = require('i18next-node-fs-backend'),
  allLanguages = ['es', 'en'],
  appDirectory = fs.realpathSync(process.cwd()),
  resolveApp = relativePath => path.resolve(appDirectory, relativePath),
  srcPath = resolveApp('src');

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
  const indexTemplate = path.resolve(`src/templates/Index.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}`,
      component: indexTemplate,
      context: {},
    }),
    ['common', 'index'],
    createPage
  )

  createRedirect({ fromPath: '/', toPath: '/es', isPermanent: true })

  allLanguages.forEach(language =>
    createRedirect({
      fromPath: `/${language}/*`,
      toPath: `/${language}/404`,
      statusCode: 404,
    })
  )
  createRedirect({ fromPath: '/*', toPath: '/404', statusCode: 404 })
}

const buildI18nPages = async (
  inputData,
  pageDefinitionCallback,
  namespaces,
  createPage
) => {
  if (!Array.isArray(inputData)) inputData = [inputData]
  await Promise.all(
    inputData.map(async ipt => {
      const definitions = await Promise.all(
        allLanguages.map(async language => {
          const i18n = await createI18nextInstance(language, namespaces)
          const res = pageDefinitionCallback(ipt, language, i18n)
          res.context.language = language
          res.context.i18nResources = i18n.services.resourceStore.data
          return res
        })
      )

      const alternateLinks = definitions.map(d => ({
        language: d.context.language,
        path: d.path,
      }))

      definitions.forEach(d => {
        d.context.alternateLinks = alternateLinks
        createPage(d)
      })
    })
  )
}

const createI18nextInstance = async (language, namespaces) => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend)
  await new Promise(resolve =>
    i18n.init(
      {
        lng: language,
        ns: namespaces,
        fallbackLng: language,
        interpolation: { escapeValue: false },
        backend: { loadPath: `${srcPath}/locales/{{lng}}/{{ns}}.json` },
      },
      resolve
    )
  )
  return i18n
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SanityLocaleString: {
      translate: {
        type: `String!`,
        args: { language: { type: 'String' } },
        resolve: (source, args) => {
          return source[args.language] || source['es']
        },
      },
    },
  })
}
