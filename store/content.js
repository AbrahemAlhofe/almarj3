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

  fetchOne (context, { path, ...options }) {
    return this.$storyapi.get(`cdn/stories${path}`, {
      ...options,
      contentVersion: context.contentVersion
    }).then((response) => {
      return response.data.story
    }).catch((error) => { throw error })
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
    return this.$algolia.search(query).then(res => res.hits)
  }

}
