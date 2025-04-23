///<reference types="cypress"/>

describe('handle tab',()=>{
    it('approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')  //parent window
        cy.get('[href="/windows/new"]').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child window

        //after performing action go back to parent tab
        cy.wait(5000)

        cy.go('back') //back to parent tab
    })

    it('approach2',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('[href="/windows/new"]').then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child window

        //after performing action go back to parent tab
        cy.wait(5000)

        cy.go('back') 



    })
})