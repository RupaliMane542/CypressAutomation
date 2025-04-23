///<reference types="cypress"/>

describe('TS001:verify contact us page', function () {  //suit
    ///////beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')


 it('TC001-verify contact us page for valid data', () => {  //testcase

        cy.ContacUsCmd('rupali', 'Mane', 'rupalism11@gmail.com', 'hello')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('TC002bvarify contact us page for invalid email id', () => {
        cy.ContacUsCmd('raju', 'jadhav', 'bhavesh', 'hi')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address')
    })
    it('Tc003 verify contact us page for reset button', () => {

        cy.ContacUsCmd('rupali', 'mane', 'neel', 'hi')
        cy.get('[type="reset"]').click()

       cy.get('[name="first_name"]').should('heve.text',"")
       cy.get('[name="last_name"]').should('heve.text',"")
       cy.get('[name="email"]').should('have.text',"")
       cy.get('[name="message"]').should('have.text',"")

    
    })


})