import { SchemaTypeDefinition } from 'sanity'
import aboutPage from './documents/aboutPage'
import blogPage from './documents/blogPage'
import contactPage from './documents/contactPage'
import globalPage from './documents/globalPage'
import homePage from './documents/homePage'
import landingPage from './documents/landingPage'
import projectPage from './documents/projectPage'
import workPage from './documents/workPage'
import blockModule from './objects/blockModule'
import imageType from './objects/imageType'
import link from './objects/link'
import member from './objects/member'
import project from './objects/project'
import row from './objects/row'
import seo from './objects/seo'
import slide from './objects/slide'
import localeBlockModule from './objects/localeBlockModule'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import category from './documents/category'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutPage,
    blogPage,
    contactPage,
    globalPage,
    homePage,
    landingPage,
    projectPage,
    workPage,
    blockModule,
    category,
    localeString,
    localeText,
    localeBlockModule,
    imageType,
    link,
    member,
    project,
    row,
    seo,
    slide
  ],
}
