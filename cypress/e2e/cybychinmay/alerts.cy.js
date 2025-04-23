///<reference types="cypress"/>
describe('Js alerts',function(){
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('normal JS alerts',function(){
        cy.on('window:alert',function(str){
        expect(str).to.eq('I am a JS Alert')
        return true
       })
    cy.contains('Click for JS Alert').click()
    cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    

    it('JS confirm alert with ok',function(){
        cy.on('window:alert'),function(str){
            expect(str).to.eq('I am a JS Confirm')
            return true
        }
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('JS confirm alert with cancel',function(){
        cy.on('window:alert',function(str){
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

    })


    it('JS prompt with ok',function(){
        cy.on('window:alert',function(str){
        expect(str).to.eq('')

        })

    })
})