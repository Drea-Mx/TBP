export default {
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeBlockModule'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeBlockModule'
    },
  ],
  preview: {
    select: {
			title: 'title.en'
		}
  }
}
