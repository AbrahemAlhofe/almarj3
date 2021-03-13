export const state = () => ({

  articles: []

})

export const mutations = {

  addArticle (state, article) {
    state.articles.push(article)
  }

}

export const actions = {

  getAll (context, options = {}) {
    return this.$storyapi.getAll('cdn/stories', options).then((stories) => {
      return stories
    })
  },

  getOne (context, { book, slug, ...options }) {
    return this.$storyapi.get(`cdn/stories/${book}/${slug}`, options).then((response) => {
      return response.data.story
    })
  }

}
