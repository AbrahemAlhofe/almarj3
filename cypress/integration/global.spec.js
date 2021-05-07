import SearchWindowModel from '../models/search-window.model';
import SidebarModel from '../models/sidebar.model';
import MenuModel from '../models/menu.model';

describe('Test the menu', () => {

    const menu = new MenuModel()

    beforeEach(() => {
        
        cy.visit('/ar')
        
    })

    it('Visit ( who we are ) page through the menu', () => {
        
        menu.navigateTo('who-we-are')

        cy.location('pathname').should('contain', '/who-we-are')

    })

    it('Visit ( docs ) page through the menu', () => {
        
        menu.navigateTo('docs')

        cy.location('pathname').should('contain', '/docs')

    })

})

describe('Test the sidebar', () => {

    const sidebar = new SidebarModel();

    beforeEach(() => {

        cy.visit('/ar')
    
        cy.viewport(767, 1024)

    })


    it('Open the sidebar', () => {
      
        sidebar.open()

        sidebar.$el.should('be.visible')

    })

    it('Close the sidebar', () => {

        sidebar.open()

        sidebar.close()

        sidebar.$el.should('not.be.visible')

    })


    it('Go to ( docs ) page through sidebar', () => {

        sidebar.open()

        sidebar.navigateTo('docs')

        cy.location('pathname').should('contain', '/docs')

    })

    it('Go to ( who we are ) page through sidebar', () => {

        sidebar.open()

        sidebar.navigateTo('who-we-are')

        cy.location('pathname').should('contain', '/who-we-are')

    })

})

describe('The search window', () => {
    
    const searchWindow = new SearchWindowModel();

    beforeEach(() => {

        cy.visit('/')

    })


    it('Open the search window', () => {

        searchWindow.open()

        searchWindow.$el.should('be.visible')

    })  


    it('Close the search window', () => {

        searchWindow.open()

        searchWindow.close()

        searchWindow.$el.should('not.be.exist')

    })

    it.only('Search', async () => {

        const hits = await cy.fixture('articles.json')

        cy.intercept({ method: 'GET', url: '/search' }, async (req) => {
            req.reply({
                fixture: 'articles',
                delay: 1000,
            })
        })
        
        searchWindow.open()

        searchWindow.input('test query')

        searchWindow.search()

        searchWindow.$loader.should('be.exist')

        cy.wait(1000)

        searchWindow.$loader.should('not.be.exist')

        const hitIndex = Math.min( Math.floor( Math.random() * 10 ), 3 )
        const hit = hits[ hitIndex ]

        searchWindow.$hits.eq(hitIndex).find('.hit__path').should('have.text', hit.name)

        searchWindow.$hits.eq(hitIndex).find('.hit__brief').should('have.text', hit.content.description)

        searchWindow.$hits.eq(hitIndex).should('have.attr', 'href').and('contain', `/docs/${hit.full_slug}`)

    })

})