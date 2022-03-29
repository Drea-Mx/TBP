export default {
    name: 'imageType',
    title: 'Image',
    options: {
        hotspot: true // <-- Defaults to false
      },
    type: 'image',
    fields: [
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        },
      ]
}