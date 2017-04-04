export default async function ({ store, params, error }) {
  const lang = params.lang || 'se'

  if (!store.state.lang.locales.includes(lang)) {
    await store.dispatch('lang/setLang', 'se')
    return error({ message: 'Sidan kunde inte hittas', statusCode: 404 })
  }

  await store.dispatch('lang/setLang', lang)
}
