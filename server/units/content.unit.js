const StoryblokClient = require('storyblok-js-client');

class Content {

    constructor () {
        this.__CMS = new StoryblokClient({ accessToken: process.env.STORYBLOK_AUTH_TOKEN })
        this.__timestamp = Math.floor( Math.random() * 1000 )
    }

    getArticleById (articleId) {
        return this.__CMS.get(`cdn/stories/${articleId}`, {
            timestamp : this.__timestamp
        }).then( res => res.data.story )
    }
    
    $updateTimestamp () {
        this.__timestamp = Math.floor( Math.random() * 1000 )
    }

}

module.exports = (options={}) => new Content(options)