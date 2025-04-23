
///<reference types="cypress" />
describe('verify tables in cypress ', () => {
    /*function calculateAge(tableId,finalSum) {
        let sum = 0
        
        cy.get(tableId).find('tr').not(':first').each((row) => {
            //cy.log(typeof(row.find('td').last().text()))
            // cy.log(row.find('td:nth-last-child(1)').text())
            sum +=number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(finalSum)
        })
    }*/
    it('verify table1',()=>{
        cy.visit('https://webdriveruniversity.com/')
        let sum=0
        cy.get('#data-table')
            .invoke("removeAttr","target")
            .click()
        
            cy.get('#t01').find('td').not(':first').each((row)=>{
                //cy.log(typeof(row.find('td').last().text()))
                //cy.log(row.find('td:nth-last-child(1)').text())

            sum+=number(row.find('td').last().text())
            }).then(()=>{
                cy.log(sum)
            })


    })
})