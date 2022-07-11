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
        orderRankField({ type: 'blogPage', hidden: false }),
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
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'imageType',
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
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
            media: 'thumbnail'
        }
    }
}