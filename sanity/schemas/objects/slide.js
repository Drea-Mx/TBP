export default {
    name: 'slide',
    title: 'Slide',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'imageType',
            description: 'Only fill one field'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockModule',
            description: 'Only fill one field'
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'description',
        }
      }
}