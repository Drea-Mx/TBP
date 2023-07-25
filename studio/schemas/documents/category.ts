const category = {
  title: 'Project Categories',
  icon: () => `📸`,
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'localeString'
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string'
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
