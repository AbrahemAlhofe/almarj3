const Algoliasearch = require('algoliasearch');

class SearchEngine {

    constructor () {
        const algoliasearch = Algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);
        const algolia = algoliasearch.initIndex('articles');
        this.handler = algolia
    }

    indexArticle (article) {
        article.objectID = article.id
        return this.handler.saveObject( article )
    }

}

module.exports = (options) => new SearchEngine(options);