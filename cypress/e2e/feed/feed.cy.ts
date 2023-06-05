import { navigateTo } from "../../support/page-objects/navigateToPage"

describe('feed page', () => {

    it('should make a valid call to a backend', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts').as('getArticles')

        navigateTo.feed()

        cy.wait('@getArticles')
        cy.get('@getArticles').then( xhr => {
            expect(xhr.response.statusCode).to.equal(200)
        })
    })

    it('should show no posts message if there is no posts', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', [])

        navigateTo.feed()

        cy.getElement('no-posts-notification').should('contain', 'No posts for now')
        cy.getElement('post-card').should('not.exist')
    })

    it('should display posts', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts*', { fixture: "posts.json"})

        navigateTo.feed()

        cy.getElement('no-posts-notification').should('not.exist')
        cy.getElement('post-card').each((card, index) => {
            cy.fixture('posts').then( posts => {
                const post = posts[index]

                cy.wrap(card).find("[data-cy=post-title]").should( element => {
                    const elementText = element.text().toLowerCase().trim()
                    expect(elementText).to.contain(post.title)
                })
                
                cy.wrap(card).find("[data-cy=post-body]").should( element => {
                    const elementText = element.text().toLowerCase().trim()
                    expect(elementText).to.contain(post.body)
                })
            })
        })
    })

    it('should navigate to post', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts*', { fixture: "posts.json"})

        navigateTo.feed()

        cy.getElement('post-card').eq(0).then( element => {
            cy.fixture('posts').then( posts => {
                const post = posts[0]
                cy.wrap(element).find("[data-cy=post-show-button]").click()
                cy.url().should('eq', Cypress.config().baseUrl + '/posts/' + post.id)
            })
        })
    })
})  