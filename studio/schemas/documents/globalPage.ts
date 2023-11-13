export default {
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
			name: 'copyright2',
			title: 'Copyright',
			type: 'localeString'
		},
		{
			name: 'copyright',
			title: 'Copyright',
			type: 'string'
		},
		{
			name: 'termsTitle',
			title: 'Privacy Policy Title',
			type: 'localeString'
		},
		{
			name: 'terms',
			title: 'Privacy Policy',
			type: 'file'
		},
		{
			name: 'disclaimerTitle',
			title: 'Disclaimer Title',
			type: 'localeString'
		},
		{
			name: 'disclaimer',
			title: 'Disclaimer',
			type: 'file'
		},
		{
			name: 'termsCondTitle',
			title: 'Terms & Conditions Title',
			type: 'localeString'
		},
		{
			name: 'termsCond',
			title: 'Terms & Conditions',
			type: 'file'
		},
		{
			name: 'linksSocialMedia',
			title: 'Links Social Media',
			type: 'array',
			of: [{ type: 'link' }]
		},
		{
			name: 'menu',
			title: 'Menu',
			type: 'array',
			of: [{ type: 'localeString' }],
			validation: (Rule) => Rule.required().max(5).min(5),
		},
		{
			name: 'headerButton',
			title: 'Header Work Button',
			type: 'localeBlockModule'
		},
		{
			name: 'thankYou',
			title: 'Thank You Page',
			type: 'thankYouPage'
		},
		{
			name: 'whatsapp',
      title: 'WhatsApp Link',
      type: 'url'
		}
	]
}
