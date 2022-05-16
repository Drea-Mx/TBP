export default {
    name: 'blogPage',
    title: 'Blog Page',
    type: 'document',
    icon: () => `📚`,
    fields: [
        {
            name: 'title',
            title: 'Blog Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
          },
        {
            name: 'titleStyle',
            title: 'Blog Title Styled',
            type: 'blockModule',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'imageType',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'bodyText',
            title: 'Body',
            type: 'blockModule'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }

    ],
}