export const state = () => ({

  timestamp: null,

  articles: [],

  contentList: []

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

  async getContentList (context, options = {}) {
    const isContentListCashed = context.state.contentList.length !== 0

    if (isContentListCashed) {
      return context.state.contentList
    } else {
      const links = await context.dispatch('getLinks')
      const books = links.filter(link => link.is_folder).map(book => ({ title: book.name, links: [], id: book.id }))
      const articles = links.filter(link => !link.is_folder)

      books.map((book) => {
        book.links = articles.filter(article => article.parent_id === book.id)
        return book
      })

      context.commit('cashContentList', books)

      return books
    }
  },

  getLinks (context, options = {}) {
    return this.$storyapi.get('cdn/links', options).then(({ data: { links } }) => Object.values(links))
  },

  getSpace (context, options = {}) {
    return this.$storyapi.get('cdn/spaces/me', {})
  },

  getAll (context, options = {}) {
    return this.$storyapi.getAll('cdn/stories', {
      ...options,
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
