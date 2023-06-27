export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'title',
      title: ' Page Title',
      type: 'string',
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
  ],
}
