// const path = require('path');

// async function turnProjectsIntoPages({graphql, actions}) {
//   // 1. Get a template for this page
//   const projectTemplate = path.resolve('./src/templates/Project.js')
//   // 2. Query all artists
//   const {data} = await graphql(`
//       query {
//           projects: allSanityProjectPage {
//             nodes {
//               title
//               slug {
//                 current
//               }
//             }
//           }
//       }
//   `);
//   // 3. Loop over each artist and create a page for each artist
//   data.projects.nodes.forEach((project) => {
//       actions.createPage({
//           // url forths new page
//           path: `/work/${project.slug.current}`,
//           component: projectTemplate,
//           context: {
//               language: 'es',
//               slug: project.slug.current,
//           }
//       })
//   });
// }



// async function turnPostsIntoPages({graphql, actions}) {
//   // 1. Get a template for this page
//   const postTemplate = path.resolve('./src/templates/Post.js')
//   // 2. Query all artists
//   const {data} = await graphql(`
//       query {
//           posts: allSanityBlogPage {
//             nodes {
//               slug {
//                 current
//               }
//               title
//             }
//           }
//       }
//   `);
//   // 3. Loop over each artist and create a page for each artist
//   data.posts.nodes.forEach((post) => {
//       actions.createPage({
//           // url forths new page
//           path: `/blog/${post.slug.current}`,
//           component: postTemplate,
//           context: {
//               language: 'es',
//               slug: post.slug.current,
//           }
//       })
//   });
// }

// async function turnLandingsIntoPages({graphql, actions}) {
//   const landingTemplate = path.resolve('./src/templates/Landing.js')
//   const {data} = await graphql(`
//     query {
//       landings: allSanityLandingPage {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   data.landings.nodes.forEach((landing) => {
//     actions.createPage({
//       path: `/${landing.slug.current}`,
//       component: landingTemplate,
//       context: {
//         language: 'es',
//         slug: landing.slug.current,
//         layout: 'landing'
//       }
//     })
//   });
// }

// exports.createPages = async (params) => {
// // Create Pages dynamically
//     await Promise.all([
//         // 1. Artists
//         turnProjectsIntoPages(params),
//         turnPostsIntoPages(params),
//         turnLandingsIntoPages(params),
//     ])
// }

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

  const aboutTemplate = path.resolve(`src/templates/About.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/about`,
      component: aboutTemplate,
      context: {},
    }),
    ['common', 'about'],
    createPage
  )

  const workTemplate = path.resolve(`src/templates/Work.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/work`,
      component: workTemplate,
      context: {},
    }),
    ['common', 'work'],
    createPage
  )

  const blogTemplate = path.resolve(`src/templates/Blog.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/blog`,
      component: blogTemplate,
      context: {},
    }),
    ['common', 'blog'],
    createPage
  )

  const contactTemplate = path.resolve(`src/templates/Contact.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/contact`,
      component: contactTemplate,
      context: {},
    }),
    ['common', 'contact'],
    createPage
  )

  const thanksTemplate = path.resolve(`src/templates/Thanks.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/thank-you`,
      component: thanksTemplate,
      context: {},
    }),
    ['common', 'contact'],
    createPage
  )

  //Dynamic Pages

  const postTemplate = path.resolve(`src/templates/Post.js`)
  const posts = await graphql(`
    query Posts {
      allSanityBlogPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  await buildI18nPages(
    posts.data.allSanityBlogPage.edges,
    ({ node }, language) => ({
      path: `/${language}/${node.slug.current}`,
      component: postTemplate,
      context: {
        slug: node.slug.current
      },
    }),
    ['common'],
    createPage
  )

  const projectTemplate = path.resolve(`src/templates/Project.js`)
  const projects = await graphql(`
    query Projects {
      allSanityProjectPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)
  await buildI18nPages(
    projects.data.allSanityProjectPage.edges,
    ({ node }, language) => ({
      path: `/${language}/${node.slug.current}`,
      component: projectTemplate,
      context: {
        slug: node.slug.current
      },
    }),
    ['common'],
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
    SanityLocaleText: {
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
