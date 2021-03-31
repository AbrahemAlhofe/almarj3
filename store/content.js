export const state = () => ({

  timestamp: null,

  articles: [],

  contentList: {}

})

export const mutations = {

  setTimestamp (state, newTimestamp) {
    state.timestamp = newTimestamp
  },

  cashArticles (state, articles) {
    state.articles = state.articles.concat(articles)
  },

  cashContentList (state, contentList) {
    state.contentList = contentList
  }

}

export const actions = {

  getSpace (context, options = {}) {
    return this.$storyapi.get('cdn/spaces/me', {})
  },

  getAll (context, options = {}) {
    return this.$storyapi.getAll('cdn/stories', {
      ...options,
      sort_by: 'content.position:asc',
      timestamp: context.timestamp
    })
  },

  getOne (context, { book, slug, ...options }) {
    const cashedArticles = context.state.articles
    const articleFullSlug = `/${book}/${slug}`

    if (cashedArticles.length !== 0) {
      const articleIndex = cashedArticles.findIndex(article => article.fullSlug === articleFullSlug)
      const article = cashedArticles[articleIndex]
      return article
    }

    return this.$storyapi.get(`cdn/stories/${book}/${slug}`, {
      ...options,
      timestamp: context.timestamp
    }).then(response => response.data.story)
  },

  search (context, query) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('search', query, resolve)
    })
  }

}
