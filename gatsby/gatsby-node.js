const path = require('path');

async function turnProjectsIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const projectTemplate = path.resolve('./src/templates/Project.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          projects: allSanityProjectPage {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.projects.nodes.forEach((project) => {
      actions.createPage({
          // url forths new page
          path: `/work/${project.slug.current}`,
          component: projectTemplate,
          context: {
              language: 'es',
              slug: project.slug.current,
          }
      })
  });
}



async function turnPostsIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const postTemplate = path.resolve('./src/templates/Post.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          posts: allSanityBlogPage {
            nodes {
              slug {
                current
              }
              title
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.posts.nodes.forEach((post) => {
      actions.createPage({
          // url forths new page
          path: `/blog/${post.slug.current}`,
          component: postTemplate,
          context: {
              language: 'es',
              slug: post.slug.current,
          }
      })
  });
}

exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Artists
        turnProjectsIntoPages(params),
        turnPostsIntoPages(params),
    ])
    
}