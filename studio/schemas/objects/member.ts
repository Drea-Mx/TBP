export default {
  name: 'member',
  title: 'Member',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageType'
    },
    {
      name: 'position2',
      title: 'Position',
      type: 'localeString'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image'
    }
  }
}
