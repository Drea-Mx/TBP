export default {
    //
    name: 'workPage',
    title: 'Work Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'projects',
            title: 'Row of projects',
            type: 'array',
            of: [
                {
                    type: 'row'
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo'
        }

    ],

}