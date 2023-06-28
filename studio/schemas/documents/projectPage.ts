import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  name: 'projectPage',
  title: 'Project Page',
  type: 'document',
  icon: () => `📸`,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'projectPage' }),
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
      title: 'Category',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' }
        },
      ],
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
      name: 'description2',
      title: 'Description',
      type: 'localeBlockModule'
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'blockModule'
    },
    {
      name: 'metadata2',
      title: 'Metadata',
      type: 'localeBlockModule'
    },
    {
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      options: { layout: 'grid' },
      of: [{ type: 'imageType' }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string'
    },
    {
      name: 'tags2',
      title: 'Tags',
      type: 'localeString'
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
      subtitle: 'description',
      media: 'thumbnail'
    }
  }
}
