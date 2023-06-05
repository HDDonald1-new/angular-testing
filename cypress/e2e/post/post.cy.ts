import { navigateTo } from "../../support/page-objects/navigateToPage"

describe('feed page', () => {
    let postFixture, userFixture

     before(() => {
        cy.fixture('post.json').then( post => {
            postFixture = post
        })

        cy.fixture('user.json').then( user => {
            userFixture = user
        })
     })


    it('should make a valid call to a backend', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/*').as('getArticle')
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/*').as('getUser')

        navigateTo.post('1')

        cy.wait('@getArticle')
        cy.get('@getArticle').then( xhr => {
            expect(xhr.request.url).to.equal('https://jsonplaceholder.typicode.com/posts/1')
            expect(xhr.response.statusCode).to.equal(200)
        })

        cy.wait('@getUser')
        cy.get('@getUser').then( xhr => {
            expect(xhr.response.statusCode).to.equal(200)
            
        })
    })

    it('should make a valid call with userId', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/*', { fixture: 'post.json'}).as('getArticle')
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/*').as('getUser')

        navigateTo.post('1')

        cy.wait('@getUser')
        cy.get('@getUser').then( xhr => {
            expect(xhr.request.url).to.equal('https://jsonplaceholder.typicode.com/users/' + postFixture.userId)
            expect(xhr.response.statusCode).to.equal(200)  
        })
    })

    it('should display post', () => {
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/*', { fixture: 'post.json'})
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/*', { fixture: 'user.json'})

        navigateTo.post('1')

        cy.getElement('post-title').should( element => {
            const elementText = element.text().toLowerCase().trim()
            expect(elementText).to.contain(postFixture.title)
        })
        cy.getElement('post-author').should('contain', `by ${userFixture.username} (${userFixture.name})`)
        cy.getElement('post-content').should('contain', postFixture.body)
    })
})  