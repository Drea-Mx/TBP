export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
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
      name: 'toTop',
      title: 'Back to Top CTA',
     type: 'localeBlockModule',
    }
  ],
  preview: {
    select: {
			title: 'seo.title2.en'
		}
  }
}
