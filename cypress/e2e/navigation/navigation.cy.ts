import { navigateTo } from "../../support/page-objects/navigateToPage"

describe('navbar', () => {

    beforeEach(() => {
        navigateTo.feed()
    })

    it('should have title and active router link "posts"', () => {
        cy.getElement('header').invoke('text').should('equal', 'SiteName')
        cy.getElement('posts-router-link').should('have.class', 'active-link')
        cy.getElement('about-router-link').should('not.have.class', 'active-link')
    })

    it('should navigate to "about" page on link click', () => {
        cy.getElement('about-router-link').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/about')
        
    })
})  