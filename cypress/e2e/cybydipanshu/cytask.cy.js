///<reference types="cypress"/>

describe("verify c.task",()=>{
    it("task1",()=>{
        cy.task('myTask1')

        cy.task('myTask2','rupali')

        cy.task('addition',{a:2,b:3}).then((res)=>{
            cy.log(res)
        })

    })

})