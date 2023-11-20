const category = {
  title: 'Project Categories',
  icon: () => `📸`,
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString',
      validation: Rule => Rule.required()
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title.en
      }
    }
  }
}

export default category
