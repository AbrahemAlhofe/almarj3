export default (context) => {
  if (!context.app.head.htmlAttrs) { context.app.head.htmlAttrs = {} }
  const currentLocaleProperties = context.app.i18n.locales.filter(locale => locale.code === context.app.i18n.locale)[0]
  const setHTMLAttributes = value => Object.assign(context.app.head.htmlAttrs, value)

  setHTMLAttributes({ dir: currentLocaleProperties.dir })
}
