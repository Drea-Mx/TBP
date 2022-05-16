export default {
    name: 'projectPage',
    title: 'Project Page',
    type: 'document',
    icon: () => `📸`,
    fields: [
        {
            name: 'title',
            title: 'Project Title',
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
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'imageType',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockModule'
        },
        {
            name: 'metadata',
            title: 'Metadata',
            type: 'blockModule'
        },
        {
            name: 'sliderImages',
            title: 'Slider Images',
            type: 'array',
            options: {
                layout: 'grid',
              },
            of: [
                {
                    type: 'imageType'
                }
            ]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }

    ],
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail'
        }
    }
}