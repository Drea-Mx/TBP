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
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'imageType',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string'
        },
        {
            name: 'slider',
            title: 'Slider',
            type: 'array',
            of: [
                {
                    type: 'slide'
                }
            ]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string'
        }

    ],
}