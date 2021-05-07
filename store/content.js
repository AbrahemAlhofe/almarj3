function flatSortLinks (links) {
  let sortedLinks = []

  links.forEach((link) => {
    if (link.is_folder) {
      const linkWithoutSublinks = { ...link }
      delete linkWithoutSublinks.sublinks
      sortedLinks = sortedLinks.concat([linkWithoutSublinks, ...flatSortLinks(link.sublinks)])
    } else { sortedLinks.push(link) }
  })

  return sortedLinks
}

export const state = () => ({

  contentVersion: null,

  cashedArticles: [],

  contentList: [],

  links: []

})

export const mutations = {

  setContentVersion (state, newContentVersion) {
    state.contentVersion = newContentVersion
  },

  cashArticles (state, articles) {
    articles.forEach((article, articleIndex) => {
      const isArticleCashedBefore = state.cashedArticles.findIndex(cashedArticle => article.id === cashedArticle.id) !== -1
      const updateCashedArticle = (article) => { state.cashedArticles[articleIndex] = article }
      if (isArticleCashedBefore) { updateCashedArticle(article) } else { state.cashedArticles.push(article) }
    })

    return articles
  },

  cashContentList (state, contentList) {
    state.contentList = contentList
  },

  cashLinks (state, links) {
    state.links = links
  }

}

export const actions = {

  fetchLinks (context, options = {}) {
    return this.$storyapi.get('cdn/links', {
      ...options,
      contentVersion: context.contentVersion
    })
      .then(({ data: { links } }) => Object.values(links))
      .then((links) => {
        const bookedLinks = links.reduce((bookedLinks, link) => {
          if (link.parent_id === 0) {
            if (link.is_folder) {
              const sublinks = links.filter(sublink => sublink.parent_id === link.id)
              link.sublinks = sublinks
            }
            bookedLinks.push(link)
          }
          return bookedLinks
        }, [])

        return flatSortLinks(bookedLinks)
      })
      .then((links) => {
        context.commit('cashLinks', links)
        return links
      })
  },

  fetchOne (context, { path, ...options }) {
    return this.$storyapi.get(`cdn/stories${path}`, {
      ...options,
      contentVersion: context.contentVersion
    }).then(response => response.data.story)
  },

  async getContentList (context, options = {}) {
    const isContentListCashed = context.state.contentList.length !== 0

    if (isContentListCashed) { return context.state.contentList }

    /** @type Array<any> */
    const links = await context.dispatch('fetchLinks')
    const contentList = []

    links.map((currentLink, currentLinkIndex) => {
      if (!currentLink.is_folder) {
        const prevLinkIndex = links.findIndex((link, linkIndex) => !link.is_folder && linkIndex < currentLinkIndex)
        const previousLink = links[prevLinkIndex]

        const nextLinkIndex = links.findIndex((link, linkIndex) => !link.is_folder && linkIndex > currentLinkIndex)
        const nextLink = links[nextLinkIndex]

        currentLink.previous_link = previousLink
        currentLink.next_link = nextLink
      }

      return currentLink
    })

    links.forEach((link) => {
      if (link.parent_id === 0 || link.is_folder) {
        const sublinks = links.filter(sublink => sublink.parent_id === link.id)
        link.sublinks = sublinks
        contentList.push(link)
      }
    })

    context.commit('cashContentList', contentList)
    return contentList
  },

  async getOne (context, { path }) {
    const cashedArticles = context.state.cashedArticles
    const articleFullSlug = path.slice(1)
    const cashedArticleIndex = cashedArticles.findIndex(article => article.full_slug === articleFullSlug)
    const isArticleCashedBefore = cashedArticleIndex !== -1

    if (isArticleCashedBefore) {
      const article = cashedArticles[cashedArticleIndex]
      return article
    } else {
      const article = await context.dispatch('fetchOne', { path })
      context.commit('cashArticles', [article])
      return article
    }
  },

  search (context, query) {
    return this.$axios.$get('/search', { query: { q: query } })
  }

}
