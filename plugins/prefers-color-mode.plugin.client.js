export default (context) => {
  const customUserPrefersColorMode = localStorage.getItem('prefers-color-mode')
  if (customUserPrefersColorMode) { context.store.commit('setPrefersColorMode', customUserPrefersColorMode) }

  const deviceUserPrefersColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (deviceUserPrefersColorMode) { context.store.commit('setPrefersColorMode', 'dark') }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light'
    context.store.commit('setPrefersColorMode', newColorScheme)
  })
}
