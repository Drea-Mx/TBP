const supportedLanguages = [{ title: 'English', id: 'en', isDefault: true}, { title: 'Español', id: 'es'}];

const localeText = {
  title: 'Localized Blog Block',
  name: 'localeText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    fieldset: lang.isDefault ? null : 'translations',
    validation: Rule => Rule.required()
  }))
}

export default localeText;
