export default {
  name: 'project',
  title: 'Project',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slider',
      title: 'Slider Images',
      type: 'array',
      options: {
          layout: 'grid',
        },
      of: [{ type: 'imageType' }]
    },
  ]
}