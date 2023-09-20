export default {
	name: 'contactPage',
	title: 'Contact Page',
	type: 'document',
	icon: () => `☎️`,
	fields: [
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
			name: 'video',
			title: 'Video Link',
			type: 'url'
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
			name: 'officesTitle',
			title: 'Offices Title',
			type: 'localeBlockModule'
		},
		{
			name: 'seo',
			title: 'SEO',
			type: 'seo'
		}
	],
	preview: {
		select: {
			title: 'seo.title2.en'
		}
	}
}
