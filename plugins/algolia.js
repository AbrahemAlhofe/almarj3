import Algoliasearch from 'algoliasearch'

export default function (context, inject) {
  const algoliasearch = Algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY)
  const algolia = algoliasearch.initIndex('articles')
  inject('algolia', algolia)
}
