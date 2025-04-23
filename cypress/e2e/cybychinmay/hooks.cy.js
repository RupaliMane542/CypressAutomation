///<reference types="cypress"/>
describe('hooks in cypress', function () {
    before(function () {
        cy.log('i will run first')
    })
    beforeEach(function () {
        cy.log('I will run before each test case')
    })
    afterEach(function () {
        cy.log('i will run after each test case')
    })
    it('Testcase one', function () {
       cy.log('testcase one')
    })
    it('Testcase two',function(){
        cy.log('Testcase two')

    })

    after(function(){
        cy.log('I will run last')
    })
})