export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'title2',
      type: 'localeString',
      title: 'Page Title'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Page Title'
    },
    {
      name: 'description2',
      title: 'Description',
      type: 'localeBlockModule',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockModule',
    },
    {
      name: 'seoImage',
      title: 'SEO Image',
      type: 'imageType',
    },
    {
      name: 'ourTeamText2',
      title: 'Our Team Text',
     type: 'localeBlockModule',
    },
    {
      name: 'ourTeamText',
      title: 'Our Team Text',
     type: 'blockModule',
    },
    {
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [{ type: 'member' }]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ]
}
