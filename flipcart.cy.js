describe('Flipcart login form',()=>{
    it('Flipcart search bar',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.contains('APPLE iPhone 14 (Purple, 128 GB)').should('contain','APPLE iPhone 14 (Purple, 128 GB)')
        
    })

})