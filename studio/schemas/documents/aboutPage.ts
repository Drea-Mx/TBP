export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: () => `📝`,
  fields: [
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
      name: 'toTop',
      title: 'Back to Top CTA',
     type: 'localeBlockModule',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
  preview: {
    select: {
			title: 'seo.title2.en'
		}
  }
}
