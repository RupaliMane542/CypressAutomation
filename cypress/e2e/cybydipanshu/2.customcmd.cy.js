///<reference types="cypress"/>
describe('varify login page of OHRM',()=>{
    it('verify for valid data',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')

        cy.get('[name="password"]').type('admin123')

        cy.get('.orangehrm-login-button').click()

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })
    it('valid for invalid data',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('rupali')

        cy.get('[name="password"]').type('pass123')

        cy.get('.orangehrm-login-button').click()

        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })

    it('verify for valid data with custom command',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.OHRMlogin('Admin','admin123')

        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')


    })
    it('verify invalid data with custom command',()=>{
        cy.OHRMlogin('rupali','pass123')

        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')

 
        
        

    })
})