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
    console.log({ prefersColorMode })
    state.prefersColorMode = prefersColorMode
  }

}
