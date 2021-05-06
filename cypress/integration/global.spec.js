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
