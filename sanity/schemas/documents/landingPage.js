export default {
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  icon: () => `📸`,
  fields: [
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'seo.title',
      },
    },
		{
			name: 'thumbnail',
			title: 'Video Thumbnail',
			type: 'image'
    },
		{
			name: 'video',
			title: 'Video',
			type: 'url'
    },
		{
			name: 'text',
			title: 'Text',
			type: 'blockModule'
    },
		{
			name: 'ctaText',
			title: 'CTA Text',
			type: 'blockModule'
    },
		{
			name: 'cta',
			title: 'CTA',
			type: 'string'
    },
		{
			name: 'about',
			title: 'About Text',
			type: 'blockModule'
    },
		{
			name: 'heading',
			title: 'Projects Heading',
			type: 'blockModule'
    },
		{
			name: 'projects',
			title: 'Projects',
			type: 'array',
			of: [{type: 'project'}]
		},
		{
			name: 'ctaProjects',
			title: 'CTA Projects',
			type: 'blockModule'
		},
		{
			name: 'cities',
			title: 'Cities Row 1',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'cities2',
			title: 'Cities Row 2',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'cities3',
			title: 'Cities Row 3',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'cities4',
			title: 'Cities Row 4',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'contactHeading',
			title: 'Contact Heading',
			type: 'blockModule'
		},
		{
			name: 'formHeading',
			title: 'Form Success Heading',
			type: 'string'
		},
		{
			name: 'formSuccess',
			title: 'Form Success Text',
			type: 'blockModule'
		},
  ],
  preview: {
		select: {
			title: 'seo.title'
		}
  }
}