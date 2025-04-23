///<reference types="cypress"/>

describe('traversing DOM element',()=>{
    it('flipkart',()=>{
        cy.visit('https://www.flipkart.com')
        cy.get('[placeholder="Search for Products, Brands and More"]').type('bag{enter}')
        cy.get('div[class="syl9yP"]').first().should('have.text','SBCOLLECTION')
    })
})