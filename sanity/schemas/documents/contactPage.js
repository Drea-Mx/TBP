export default {
    //
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    icon: () => `☎️`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'headline',
            title: 'Headline',
            type: 'blockModule',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'imageType'
        }

    ],
}