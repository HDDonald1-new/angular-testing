import { navigateTo } from "../../support/page-objects/navigateToPage"

describe('about page', () => {

    beforeEach(() => {
        navigateTo.about()
    })

    it('page should have a header and content', () => {
        cy.getElement('about-header').invoke('text').should('equal', 'About')
        cy.getElement('about-content').invoke('text').should('equal', 'Project for angular testing')
    })
})  