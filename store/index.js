export const state = () => ({
  isSidebarOpen: false,
  isSearchWindowOpen: false
})

export const getters = {

  prefersColorMode () {
    const isBrowser = typeof window !== 'undefined'
    return isBrowser ? localStorage.getItem('prefers-color-mode') : 'light'
  }

}

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
  }

}
