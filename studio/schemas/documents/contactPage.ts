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
			name: 'title2',
			title: ' Page Title',
			type: 'localeString',
		},
		{
			name: 'headline',
			title: 'Headline',
			type: 'blockModule',
		},
		{
			name: 'headline2',
			title: 'Headline',
			type: 'localeBlockModule',
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
