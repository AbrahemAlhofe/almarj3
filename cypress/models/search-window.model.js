import MenuModel from './menu.model';

export default class SearchWindow {

    constructor () {
        this.__Menu = new MenuModel()
    }

    get $el () {
        return cy.get('.searchWindow')
    }

    get $hits () {
        return cy.get('.searchWindow .hit')
    }

    get $loader () {
        return cy.get('.searchWindow .searchWindow__loader')
    }

    /**
     * Open search window
     * @return {void}
     */
    open () {
        this.__Menu.$searchButton.click()
    }

    /**
     * Close search window
     * @return {void}
     */
    close () {
        cy.get('.searchWindow .searchWindow__closeButton').click()
    }

    /**
     * Input search query
     * @param {string} input 
     */
    input (input) {
        cy.get('.searchWindow .searchInput__input').type(input)
    }

    /**
     * Click search button
     * @return {void}
     */
    search () {
        cy.get('.searchWindow .searchInput__searchButton').click()
    }

    /**
     * 
     * @return {void}
     */
    clearInput () {
        cy.get('.searchWindow .searchInput__clearButton').click()
    }

}