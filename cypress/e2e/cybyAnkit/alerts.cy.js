/// <reference types="cypress"/>
///alerts= confirmation alert,alert,prompt alert,authentiction alerts


describe('Alerts',()=>{
    //1)javascript alert:it will have some text and an ok button


    it('JS Alerts',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        //alert window automatically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    //2)javscript confirmation alert
    it('js cofirm alerts-ok button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()


        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text','You clicked: Ok')

        //cy.get('#result').should('have.text','You clicked: Cancel')

    })
    it('js confirm alert-cancel button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window.confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm")

        })

        cy.on("window:confirm",()=>false)
        cy.get("#result").should("have.text","You clicked: Cancel")
    })

    //3)js alert for prompt alerts
    it('prompt alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("welcome")

        })
        cy.get("button[onclick='jsPrompt()']").click()

        cy.get("#result").contains("You entered: welcome")


    })

/*//4)authentication alerts
    it('authenticated alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                                               {
                                                                                                Username:"admin",
                                                                                                Password:"admin"
                                                                                               }                 
                                                                                            });

    })*/
})