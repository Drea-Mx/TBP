export default {
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
			title: 'Poster of the video',
			type: 'imageType'
		},
		{
			name: 'videoMp4',
			title: 'Video Mp4',
			type: 'file'
		},
		{
			name: 'videoWebm',
			title: 'Video Webm',
			type: 'file'
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo'
		}
	],
}
