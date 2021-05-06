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