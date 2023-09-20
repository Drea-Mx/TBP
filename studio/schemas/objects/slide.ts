export default {
  name: 'slide',
  title: 'Slide',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageType',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'image.alt',
    }
  }
}
