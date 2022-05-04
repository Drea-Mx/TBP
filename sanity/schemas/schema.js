// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity


import imageType from './objects/imageType'
import blockModule from './objects/blockModule'
import member from './objects/member'
import link from './objects/link'
import slide from './objects/slide'
import row from './objects/row'


import globalPage from './documents/globalPage'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import contactPage from './documents/contactPage'
import projectPage from './documents/projectPage'
import blogPage from './documents/blogPage'

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    
    imageType,
    blockModule,
    member,
    link,
    slide,
    row,

    globalPage,
    homePage,
    aboutPage,
    contactPage,
    projectPage,
    blogPage,

  ]),
})
