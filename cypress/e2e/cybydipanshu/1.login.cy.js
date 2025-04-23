///<reference types="cypress"/>

describe("verify contact us page",function(){
    it("verify cotact us page for valid data",function(){

   
    //AAA{arrengement,action,assertion}

    //arrangement
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')



    //actions
    cy.get('[name="first_name"]').type('rupa')
    cy.get('[name="last_name"]').type('mane')
    cy.get('[name="email"]').type('rupalism11@gmail.com')
    cy.get('[name="message"]').type('I am learning cypress')

    cy.get('[type="submit"]').click()

    //assertion

    cy.get('h1').should('have.text','Thank You for your Message!')
})


it("",function(){
    
})
}) 