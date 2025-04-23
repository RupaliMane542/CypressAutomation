///<reference types="cypress"/>

describe('verify drop down list',()=>{
    it('verify static drop down option',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('python')
        cy.get('#dropdowm-menu-2').select('TestNG')

    })
    it('verify dynamic drop down list',()=>{
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('banana')


    })

})