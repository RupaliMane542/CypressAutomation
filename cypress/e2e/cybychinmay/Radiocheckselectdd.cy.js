///<reference types='cypress' />
describe('verify the functionality of checkbox,radio buttons and select drop down',function(){
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('verify functionality of radio buttons',function(){
    //     cy.get('input[value="green"]').click().should('be.checked')
    //     cy.get('input[value="green"]').check().should('be.checked')
    //    // cy.get('input[value="blue"]').check().should('not.be.checked')

       cy.get('#radio-buttons').children().filter('input')
       .should('have.length',5)
       .each(function(el){
        cy.wrap(el).check().should('be.checked')
       })
    
       })
       it('verify the functionality of checkbox ',function(){
        cy.get('input[value="option-3"]').should('be.checked')
        cy.get('input[value="option-1"]').click().should('be.checked')
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')
       

        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')

       })
      it.only('verify the select drop down in cypress',function(){
    
        let arr=['Python','TestNG','javascript']
        cy.get('.section-title').first().children().each(function(el,index){
            cy.wrap(el).select(arr[index]).should('have.value',arr[index])
        })
      })

})