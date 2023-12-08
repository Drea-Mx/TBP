export default {
  name: 'process',
  title: 'Process',
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
