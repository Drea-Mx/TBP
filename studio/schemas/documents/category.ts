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
    }
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
