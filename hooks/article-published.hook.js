import AlgoliaSearch from 'algoliasearch';
import StoryblokClient from 'storyblok-js-client';

const storyblok = new StoryblokClient({ accessToken: process.env.STORYBLOK_AUTH_TOKEN })

const algoliasearch = AlgoliaSearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_API_KEY);
const algolia = algoliasearch.initIndex('articles');

export default async (req, res, next) => {

    const articleId = req.body.story_id

    if ( req.body.action !== 'published' ) return next();

    const { data: { story: article } } = await storyblok.get(`cdn/stories/${articleId}`)
    
    article.objectID = articleId

    try {

        await algolia.saveObject( article )

    } catch ( err ) {

        console.log( err )

    }

    res.status(200).send({
        message: 'article has been indexed yet'
    })

}