const supportedLanguages = [{ title: 'English', id: 'en', isDefault: true}, { title: 'Español', id: 'es'}];

const localeString = {
  title: 'Localized String',
  name: 'localeString',
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
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
    validation: Rule => Rule.required()
  }))
}

export default localeString;
