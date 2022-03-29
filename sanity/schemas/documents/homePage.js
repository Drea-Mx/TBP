export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    fields: [
        {
            name: 'title',
            title: ' Page Title',
            type: 'string',
        },
        {
            name: 'heroTexto',
            title: 'Hero text',
            type: 'string',
        },
        {
            name: 'heroBackgroundImage',
            title: 'Hero Background Image',
            type: 'imageType',
        },
        {
            name: 'leadText',
            title: 'Lead Text',
            type: 'blockModule',
        },

    ],
}