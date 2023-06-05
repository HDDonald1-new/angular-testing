export class PagesNavigation {
    feed() {
        cy.visit('/')
    }

    about() {
        cy.visit('/about')
    }

    post(id: string) {
        cy.visit(`/posts/${id}`)
    }
}

export const navigateTo = new PagesNavigation()