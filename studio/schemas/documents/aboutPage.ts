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
      name: 'featuredTitle',
      title: 'Featured Title',
     type: 'localeBlockModule',
    },
    {
      name: 'featured',
      title: 'Featured',
     type: 'array',
     of: [{ type: 'feat' }]
    },
    {
      name: 'ourProcessTitle',
      title: 'Our Process Title',
      type: 'localeBlockModule',
    },
    {
      name: 'ourProcessSteps',
      title: 'Our Process Steps',
      type: 'array',
      of: [{ type: 'process' }]
    },
    {
      name: 'ourTeamText2',
      title: 'Our Team Text',
     type: 'localeBlockModule',
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
