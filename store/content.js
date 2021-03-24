export const state = () => ({

  timestamp: null,

  articles: []

})

export const mutations = {

  setTimestamp (state, newTimestamp) {
    state.timestamp = newTimestamp
  },

  addArticle (state, article) {
    state.articles.push(article)
  }

}

export const actions = {

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
    return this.$storyapi.get(`cdn/stories/${book}/${slug}`, {
      ...options,
      timestamp: context.timestamp
    }).then(response => response.data.story)
  }

}
