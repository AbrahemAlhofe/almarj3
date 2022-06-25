export const state = () => ({

  contentVersion: Math.floor(Math.random() * 1000),

  cashedArticles: []

})

export const mutations = {

  cashArticles (state, articles) {
    articles.forEach((article, articleIndex) => {
      const isArticleCashedBefore = state.cashedArticles.findIndex(cashedArticle => article.id === cashedArticle.id) !== -1
      const updateCashedArticle = (article) => { state.cashedArticles[articleIndex] = article }
      if (isArticleCashedBefore) { updateCashedArticle(article) } else { state.cashedArticles.push(article) }
    })

    return articles
  }

}

export const actions = {

  fetchOne (context, { path, id, ...options }) {
    let query = `cdn/stories${path}`

    if (id !== undefined) { query = `cdn/stories/${id}` }

    return this.$storyapi.get(query, {
      ...options,
      contentVersion: context.contentVersion
    }).then((response) => {
      return response.data.story
    }).catch((error) => { throw error })
  },

  async getArticleById (context, id) {
    const article = await context.dispatch('fetchOne', { id })
    return article
  },

  search (context, query) {
    return this.$algolia.search(query).then(res => res.hits)
  }

}
