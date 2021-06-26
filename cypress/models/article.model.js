export default class ArticleModel {

    constructor () {}

    get $body () {

        return cy.get('.referencePage__body .content')

    }

}