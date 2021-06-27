import algoliasearch from 'algoliasearch'

export default (context, inject) => {
  const client = algoliasearch(context.$config.ALGOLIA_APP_ID, context.$config.ALGOLIA_ADMIN_API_KEY)
  const index = client.initIndex('articles')

  inject('algolia', index)
}
