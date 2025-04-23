describe('contact us form',()=>{
    it('contact us with positive scenario',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.get('#input_1_1').type('Rupali')
        cy.get('#input_1_2').type('Mane')
        cy.get('#input_1_3').type('rupalimane542@gmail.com')
        cy.get('#input_1_4').type('7741987833')
        cy.get('#input_1_5').type('www.RPMEnterprise.com')
        cy.get('#input_1_6').type('RPM Enterprise')
        cy.get('#input_1_7').type('It is tooling company')
        cy.get('#gform_submit_button_1').click()
        cy.get('h1').should('have.text','Thank You!')

    })
    it('contactus with negative scenario',()=>{
        cy.visit('https://mediaproper.com/contact-us/')
        cy.get('#input_1_1').type('Rupali')
        cy.get('#input_1_2').type('Mane')
        cy.get('#input_1_3').type('rupalimane542gmail.com')
        cy.get('#input_1_4').type('7741987833')
        cy.get('#input_1_5').type('www.RPMEnterprise.com')
        cy.get('#input_1_6').type('RPM Enterprise')
        cy.get('#input_1_7').type('It is tooling company')
        cy.get('#gform_submit_button_1').click()
        cy.contains('The email address entered is invalid, please check the formatting (e.g. email@domain.com).').should('be.visible')

    })

})