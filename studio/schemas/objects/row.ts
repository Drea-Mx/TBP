export default {
  name: 'row',
  title: 'Row',
  type: 'object',
  fields: [
    {
      title: 'Project 1',
      name: 'project1',
      type: 'reference',
      to: [{type: 'projectPage'}]
    },
    {
      title: 'Project 2',
      name: 'project2',
      type: 'reference',
      to: [{type: 'projectPage'}]
    },
    {
      title: 'Project 3',
      name: 'project3',
      type: 'reference',
      to: [{type: 'projectPage'}]
    },
    {
      title: 'Project 4',
      name: 'project4',
      type: 'reference',
      to: [{type: 'projectPage'}]
    },
    {
      title: 'Project5',
      name: 'project5',
      type: 'reference',
      to: [{type: 'projectPage'}]
    },
    {
      title: 'Project6',
      name: 'project6',
      type: 'reference',
      to: [{type: 'projectPage'}]
    }
  ],
  preview: {
    select: {
      title: 'project1.title',
      media: 'project1.thumbnail'
    }
  }
}
