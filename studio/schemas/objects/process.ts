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
    {
      name: 'video',
      title: 'Video URL',
      type: 'url'
    },
  ],
  preview: {
    select: {
			title: 'title.en'
		}
  }
}
