export default {
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'title2',
      title: 'Page Title',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'projects',
      title: 'Row of projects',
      type: 'array',
      of: [{ type: 'row' }]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    }
  ],
}
