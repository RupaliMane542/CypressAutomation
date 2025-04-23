describe('webdriver tables',()=>{
    it.skip('check number of rows and coloum',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get("[class='table table-light traversal-table']>tbody>tr>th").should('have.length','3') //no of rows
        cy.get("[class='table table-light traversal-table']>thead>tr>th").should('have.length','3')

    })
    it.skip('check cell data from specific row and data',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get("[class='table table-light traversal-table']>thead>tr>th").contains("First")


    })
    it.skip('webtable2',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('table[class="table-display"]>tbody>tr').should('have.length','4')
        cy.get('table[class="table-display"]>tbody>tr>th').should('have.length','3')
    
    })
    it.only('opencart',()=>{
        //failonstatuscode:false
       cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').clear()
        cy.get('#input-username').type('demo')
        cy.get('#input-password').clear()

        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()
        //cy.get('#button-menu').click()

        cy.get('#menu-customer').click()

        cy.get('#menu-customer').eq(0).within(()=>{
            cy.get('.collapse show').click()
        })
    
        


    })

  
})