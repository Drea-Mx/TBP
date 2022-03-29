export default {
    //
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: () => `📝`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'seoImage',
            title: 'SEO Image',
            type: 'imageType',
        },
        {
            name: 'ourTeamText',
            title: 'Our Team Text',
            type: 'string',
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [
                {
                    type: 'member'
                }
            ]
        }

    ],
}