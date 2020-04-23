import {v4 as uuid} from 'uuid'

const name = uuid().slice(0,6)
const email = `${name}@domain.com`
const password = uuid().slice(0,10)

describe('Form Testing', () => {
    it('Can navigate to the page', () => {
        cy.visit('')
        cy.url().should('match', /http:\/\/localhost/)
    })

    it('Can detect invalid forms', ()=> {
        cy.get('input[name="name"]')
            .type('a')
            .clear()

        cy.contains('at least 5')

        cy.get('input[name="email"]')
            .type('p')
            .clear()
        
        cy.contains('email is required')
    })

    it('Can submit a form', () => {
        cy.get('input[name="name"]')
            .type(name)
            .should('have.value', name)

        cy.get('input[name="email"]')
            .type(email)
            .should('have.value', email)

        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)

        cy.get('input[name="termsOfService"]')
            .check()
            .should('have.checked')
        
        cy.get('#submit-btn')
            .click()
        
        cy.get('.user-card')
            .contains(name)
            .next().contains(email)
            .next().contains(/ID/)

    })
})