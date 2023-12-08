export default {
	name: 'contactPage',
	title: 'Contact Page',
	type: 'document',
	icon: () => `☎️`,
	fields: [
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
		// {
		// 	name: 'videoMp4',
		// 	title: 'Video Mp4',
		// 	type: 'file'
		// },
		// {
		// 	name: 'videoWebm',
		// 	title: 'Video Webm',
		// 	type: 'file'
		// },
		{
			name: 'officesTitle',
			title: 'Offices Title',
			type: 'localeBlockModule'
		},
		{
			name: 'industries',
			title: 'Industries (Form)',
			type: 'array',
			of: [{ type: 'localeString' }]
		},
		{
			name: 'services',
			title: 'Services (Form)',
			type: 'array',
			of: [{ type: 'localeString' }]
		},
		{
			name: 'how',
			title: 'How did you hear (Form)',
			type: 'array',
			of: [{ type: 'localeString' }]
		},
		{
			name: 'locations',
			title: 'Locations (Form)',
			type: 'array',
			of: [{ type: 'localeString' }]
		},
		{
			name: 'sidebarHeadline',
			title: 'Sidebar Headline',
			type: 'localeBlockModule',
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
