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

  getAll (context, options = {}) {
    return this.$storyapi.getAll('cdn/stories', {
      ...options,
      contentVersion: context.contentVersion
    })
  },

  getOne (context, { book, slug, ...options }) {
    const cashedArticles = context.state.cashedArticles
    const articleFullSlug = `${book}/${slug}`
    const cashedArticleIndex = cashedArticles.findIndex(article => article.full_slug === articleFullSlug)
    const isArticleCashedBefore = cashedArticleIndex !== -1

    if (isArticleCashedBefore) {
      const article = cashedArticles[cashedArticleIndex]
      return article
    }

    return this.$storyapi.get(`cdn/stories/${book}/${slug}`, {
      ...options,
      contentVersion: context.contentVersion
    }).then(response => response.data.story).then((article) => {
      context.commit('cashArticles', [article])
      return article
    })
  },

  search (context, query) {
    return new Promise((resolve, reject) => {
      this.$socket.emit('search', query, resolve)
    })
  }

}
