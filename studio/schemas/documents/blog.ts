export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: () => `📝`,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'localeBlockModule',
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
