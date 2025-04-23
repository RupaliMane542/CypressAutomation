///<reference types= "cypress" />

describe(("opencart project"),()=>{
    it('opencart',()=>{
        //failonstatuscode:false
       cy.visit("https://www.opencart.com/index.php?route=cms/demo")
       cy.wait(3000)
       
      cy.get('a[href="https://demo.opencart.com/admin/"]').click()

        //cy.get('#input-username').clear()
       // cy.get('#input-username').type('demo')
        //cy.get('#input-password').clear()

        //cy.get('#input-password').type('demo')
        //cy.get('.fa-solid fa-key').click()
        //cy.get('#button-menu').click()

        //cy.get('#menu-customer').click()

        //cy.get('#menu-customer').eq(0).within(()=>{
           // cy.get('.collapse show').click()
        })
})
