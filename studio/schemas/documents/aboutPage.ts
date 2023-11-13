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
      name: 'projectsTitle',
      title: 'Projects Title',
      type: 'localeString',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'number',
    },
    {
      name: 'countriesTitle',
      title: 'Countries Title',
      type: 'localeString',
    },
    {
      name: 'countries',
      title: 'Countries',
      type: 'number',
    },
    {
      name: 'sinceTitle',
      title: 'Since Title',
      type: 'localeString',
    },
    {
      name: 'since',
      title: 'Since',
      type: 'number',
    },
    {
      name: 'teamImage',
      title: 'Team Image',
      type: 'image',
    },
    {
      name: 'servicesTitle',
      title: 'Services Title',
     type: 'localeBlockModule',
    },
    {
      name: 'services',
      title: 'Services Slider',
     type: 'array',
     of: [{ type: 'service' }]
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
