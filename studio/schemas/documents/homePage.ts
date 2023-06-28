export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: () => `🏡`,
  fields: [
    {
      name: 'title',
      title: ' Page Title',
      type: 'string',
    },
    {
      name: 'title2',
      title: ' Page Title',
      type: 'localeString',
    },
    {
      name: 'heroTexto',
      title: 'Hero text',
      type: 'string',
    },
    {
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'imageType',
    },
    {
      name: 'leadText',
      title: 'Lead Text',
      type: 'blockModule',
    },
    {
      name: 'leadText2',
      title: 'Lead Text',
      type: 'localeBlockModule',
    },
    {
      name: 'projects',
      title: 'Row of projects',
      type: 'array',
      of: [{ type: 'row'}]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
}
