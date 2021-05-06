import MenuModel from './menu.model';

export default class SidebarModel {

    constructor () {
        this.__Menu = new MenuModel()
    }
    
    get $el () {
        return cy.get('.sidebar')
    }

    get $closeButton () {
        return cy.get('.sidebar .sidebar__closeButton')
    }

    /** 
     * @param {String} page 
     */
    navigateTo (page) {
        cy.get(`.sidebar [data-pagename=${page}]`).click()
    }
    
    open () {
        this.__Menu.$sidebarButton.click()
    }

    close () {
        this.$closeButton.click()
    }

}