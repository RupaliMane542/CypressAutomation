// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>

Cypress.Commands.add('OHRMlogin',(un,pw)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('[name="username"]').type(un)
    cy.get('[name="password"]').type(pw)

    cy.get('.orangehrm-login-button').click()
})

Cypress.Commands.add('ContacUsCmd',(fn,ln,email,msg)=>{
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(msg)
    
})