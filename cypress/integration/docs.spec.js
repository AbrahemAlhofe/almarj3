import ArticleModel from '../models/article.model';

describe('Test article', () => {

    const article = new ArticleModel();

    it('should has the same article', async () => {

        const articles = await cy.fixture('articles.json')
        const currentArticle = articles[0]

        cy.intercept({ method: 'GET', url: 'https://api.storyblok.com/v1/cdn/stories/*' }, async (req) => {
            
            req.reply({
                body: {
                    data : {
                        story : currentArticle
                    }
                },
                delay: 1000,
            })

        })

        cy.visit(`/docs/the-book/the-article-1`)

        article.$body.should('have.text', currentArticle.content.body)

        cy.get('head title').should('contain', currentArticle.name)

        cy.get('head meta[name="description"]').should('have.attr', 'content', currentArticle.description)

    })

})
