export default {
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'toTop',
      title: 'Back to Top CTA',
     type: 'localeBlockModule',
    },
  ],
  preview: {
    select: {
			title: 'seo.title2.en'
		}
  }
}
