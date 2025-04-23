///<reference types="cypress"/>

describe('API testing',function(){
    it('GET API to get user pagewise',function(){
        cy.request({
            url:"https://reqres.in/api/users?page=2",
            method:"GET"
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(200)
        })

    })
    it('POST API to create the user',function(){
        cy.request({
            url:"https://reqres.in/api/users?page=2",
            method:"POST",
            body:{
                name: "Rajesh",
                job: "Tester"
            }
        }).then(function(response){
            expect(response.status).to.eq(201)
        })

    })

    it('PUT API to update the user',function(){

        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"PUT",
            body:{
                name: "Avani",
                job: "QA "
            }
        }).then(function(response){
            expect(response.status).to.eq(200)
        })

    })
    it('DELETE API for deleting the user',function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method:"DELETE"
        }).then(function(response){
            expect(response.status).to.eq(204)
        })

    })
 
    






})