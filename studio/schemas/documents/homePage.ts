export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: () => `🏡`,
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
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
      name: 'cta',
      title: 'CTA',
      type: 'localeBlockModule',
    },
    {
      name: 'leadText',
      title: 'Lead Text',
      type: 'blockModule',
    },
    {
      name: 'leadText2',
      title: 'Lead Text',
      type: 'localeBlockModule',
    },
    {
      name: 'recent',
      title: 'Recent Projects',
      type: 'localeBlockModule',
    },
    {
      name: 'recentCta',
      title: 'Recent Projects CTA',
      type: 'localeBlockModule',
    },
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'localeBlockModule',
    }
  ],
}
