export const state = () => ({

  contentVersion: null,

  cashedArticles: [],

  contentList: []

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
  }

}

export const actions = {

  fetchContentList (context, options = {}) {
    return this.$storyapi.get('cdn/links', {
      ...options,
      contentVersion: context.contentVersion
    })
      .then(({ data: { links } }) => Object.values(links))
      .then((links) => {
        const entries = links.filter(link => link.parent_id === 0)

        entries.map((link) => {
          if (link.is_folder) {
            const sublinks = links.filter(sublink => sublink.parent_id === link.id)
            link.sublinks = sublinks
            return link
          } else {
            return link
          }
        })

        return entries
      })
  },

  fetchOne (context, { book, slug, ...options }) {
    return this.$storyapi.get(`cdn/stories/${book}/${slug}`, {
      ...options,
      contentVersion: context.contentVersion
    }).then(response => response.data.story)
  },

  async getContentList (context, options = {}) {
    const isContentListCashed = context.state.contentList.length !== 0
    if (isContentListCashed) {
      return context.state.contentList
    } else {
      const contentList = await context.dispatch('fetchContentList')
      context.commit('cashContentList', contentList)
      return contentList
    }
  },

  async getOne (context, { book, slug }) {
    const cashedArticles = context.state.cashedArticles
    const articleFullSlug = `${book}/${slug}`
    const cashedArticleIndex = cashedArticles.findIndex(article => article.full_slug === articleFullSlug)
    const isArticleCashedBefore = cashedArticleIndex !== -1

    if (isArticleCashedBefore) {
      const article = cashedArticles[cashedArticleIndex]
      return article
    } else {
      const article = await context.dispatch('fetchOne', { book, slug })
      context.commit('cashArticles', [article])
      return article
    }
  },

  search (context, query) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('search', query, resolve)
    })
  }

}
