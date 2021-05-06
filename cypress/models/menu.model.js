export default class MenuModel {
    
    constructor () {}

    get $list () {
        return cy.get('.menu .menu__list')
    }

    get $searchButton () {
        return cy.get('.menu .menu__searchButton')
    }

    get $sidebarButton () {
        return cy.get('.menu .menu__sidebarButton')
    }

    /** 
     * Use menu to navigate to pages
     * @param {String} page 
     */
    navigateTo (page) {
        cy.get(`[data-pagename=${page}]`).click()
    }

}