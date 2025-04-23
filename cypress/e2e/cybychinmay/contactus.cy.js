///<reference types="cypress"/>
describe('verify the contact us form',function(){
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })
    it('verify the contact us with valid inputs',function(){
        cy.get('input[name="first_name"]').type("Rupali")
        cy.get('input[name="last_name"]').type("Mane")
        cy.get('input[name="email"]').type("rupalimane542@gmail.com")
        cy.get('textarea[name="message"]').type("I am learning")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
     })

     it('verify the functionality of reset button',function(){
        cy.get('input[name="first_name"]').type("Sharad")
        cy.get('input[name="last_name"]').type("Mane")
        cy.get('input[name="email"]').type("manesharad11@gmail.com")
        cy.get('textarea[name="message"]').type("I am working")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')

     })

     it('verify the contact us with inavalid email address',function(){
        cy.get('input[name="first_name"]').type("Sharad")
        cy.get('input[name="last_name"]').type("Mane")
        cy.get('input[name="email"]').type("manesharad11gmail.com")
        cy.get('textarea[name="message"]').type("I am working")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Error: Invalid email address")

     })
     it.only('verify the heading and title of page',function(){
        cy.get('h2[name="contactme"]').should('have.text',"CONTACT US").and('be.visible')
        cy.title().should('eq','WebDriver | Contact Us')

     })
})