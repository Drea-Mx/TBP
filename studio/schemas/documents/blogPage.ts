import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  icon: () => `📚`,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'blogPage' }),
    {
      name: 'title2',
      title: 'Blog Title',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title2.en' },
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'imageType',
    },
    {
      name: 'titleStyle2',
      title: 'Blog Title Styled',
      type: 'localeBlockModule',
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
      name: 'tagline2',
      title: 'Tagline',
      type: 'localeString'
    },
    {
      name: 'bodyText2',
      title: 'Body',
      type: 'localeBlockModule'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'thumbnail'
    }
  }
}
