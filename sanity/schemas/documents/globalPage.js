export default {
    //
    name: 'globalPage',
    title: 'Global Page',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'whiteLogo',
            title: 'White Logo',
            type: 'imageType'
        },
        {
            name: 'blueLogo',
            title: 'Blue Logo',
            type: 'imageType'
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string'
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string'
        },
        {
            name: 'terms',
            title: 'Privacy Policy`',
            type: 'file'
        },
        {
            name: 'linksSocialMedia',
            title: 'Links Social Media',
            type: 'array',
            of: [
                {
                    type: 'link'
                }
            ]
        }
    ],
}