/// <reference types="cypress" />

export{}
declare global {
  namespace Cypress {
    interface Chainable {
        getElement(cyDataTagName: string): Chainable<any>
    }
  }
}

Cypress.Commands.add('getElement', (cyDataTagName) => {
    return cy.get(`[data-cy=${cyDataTagName}]`)
})
