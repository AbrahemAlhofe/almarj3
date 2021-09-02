export const state = () => ({
  PrefersColorMode: 'light',
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
    state.PrefersColorMode = state.PrefersColorMode === 'light' ? 'dark' : 'light'
  }

}
