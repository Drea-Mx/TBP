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
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required()
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
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'imageType',
      validation: Rule => Rule.required()
    },
    {
      name: 'description2',
      title: 'Description',
      type: 'localeBlockModule',
      validation: Rule => Rule.required()
    },
    {
      name: 'metadata2',
      title: 'Metadata',
      type: 'localeBlockModule',
      validation: Rule => Rule.required()
    },
    {
      name: 'sliderImages',
      title: 'Slider Images',
      type: 'array',
      options: { layout: 'grid' },
      of: [{ type: 'imageType' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'tags2',
      title: 'Tags',
      type: 'localeString',
      validation: Rule => Rule.required()
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
      subtitle: 'description',
      media: 'thumbnail'
    }
  }
}
