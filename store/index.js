export const state = () => ({
  prefersColorMode: 'light',
  isSidebarOpen: false,
  isSearchWindowOpen: false
})

export const mutations = {

  openSidebar: (state) => {
    state.isSidebarOpen = true
  },
  closeSidebar: (state) => {
    state.isSidebarOpen = false
  },

  openSearchWindow: (state) => {
    state.isSearchWindowOpen = true
  },
  closeSearchWindow: (state) => {
    state.isSearchWindowOpen = false
  },

  togglePrefersColorMode: (state) => {
    const mode = state.prefersColorMode === 'light' ? 'dark' : 'light'
    localStorage.setItem('prefers-color-mode', mode)
    state.prefersColorMode = mode
  },

  setPrefersColorMode: (state, prefersColorMode) => {
    state.prefersColorMode = prefersColorMode
  }

}

export const plugins = [

  (store) => {
    if (typeof window === 'undefined') { return }

    const customUserPrefersColorMode = localStorage.getItem('prefers-color-mode')
    if (customUserPrefersColorMode) { store.commit('setPrefersColorMode', customUserPrefersColorMode) }

    const deviceUserPrefersColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (deviceUserPrefersColorMode) { store.commit('setPrefersColorMode', 'dark') }
  }

]
