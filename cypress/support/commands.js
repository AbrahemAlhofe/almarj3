// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('swipe', { prevSubject: 'element' }, (target, direction) => {

    
    if ( direction === 'right' ) {
        
        target.trigger('mousedown', { which: 1, clientX: 0, clientY: 0 })
        target.trigger('mousemove', { clientX: 100, clientY: 0 })
        
    }
    
    if ( direction === 'left' ) {

        target.trigger('mousedown', { which: 1, clientX: 100, clientY: 0 })
        target.trigger('mousemove', { clientX: 0, clientY: 0 })
        
    }
    
    target.trigger('mouseup')

})