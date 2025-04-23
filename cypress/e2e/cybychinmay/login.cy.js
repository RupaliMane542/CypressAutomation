

describe('verify the login functionality with sauce demo', function () {
let credentials={
    Username :" Admin",
    Password :"admin123" 
}
before(function(){
    cy.fixture('credentials').then(function(data){
        this.data=data
    })
})
    it.skip('verify the login functionality', function () {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.app_logo').should('be.visible')

    })
    it.skip('verify login functionality-using global variables', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(credentials.Username)
        cy.get('input[name="password"]').type(credentials.Password)
        cy.get('button[type="submit"]').click()
    })
    it('verify login with fixture for each test case',function(){
        cy.fixture(credentials)
        .then(function(data){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(data.Username)
        cy.get('input[name="password"]').type(data.Password)
        cy.get('button[type="submit"]').click()

        })

    })
    it('verify the login by writing fixture in before block',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type(this.data.Username)
        cy.get('input[name="password"]').type(this.data.Password)
        cy.get('button[type="submit"]').click()

    })

})