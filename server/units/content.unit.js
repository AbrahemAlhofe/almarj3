const StoryblokClient = require('storyblok-js-client');

class Content {

    constructor () {
        this.__CMS = new StoryblokClient({ accessToken: process.env.STORYBLOK_AUTH_TOKEN })
        this.__contentVersion = Math.floor( Math.random() * 1000 )
    }

    getArticleById (articleId) {
        return this.__CMS.get(`cdn/stories/${articleId}`, {
            contentVersion : this.__contentVersion
        }).then( res => res.data.story )
    }
    
    $updateContentVersion () {
        this.__contentVersion = Math.floor( Math.random() * 1000 )
    }

}

module.exports = (options={}) => new Content(options)