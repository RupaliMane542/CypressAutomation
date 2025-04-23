describe('verify th api',function(){
    it('verify the get request',function(){
        cy.request('get',"https://reqres.in/api/users?page=2")
        .then(function(response){
            //cy.log(response)
            expect(response.status).to.eql(200)
            expect(response.body.page).to.eql(2)
            expect(response.body.per_page).to.eq(response.body.data.length)
        })

    })

    it.only('verify the get request',function(){
            cy.request({
                method:"GET",
                url:"https://reqres.in/api/users?page=2",
                qs:{page:2}
            })
            .then(function(response){
                expect(response.status).to.eq(200)
                expect(response.body.page).to.eq(2)
                expect(response.body.per_page).to.eq(response.body.data.length)
                expect(response.body.data[0]).to.have.property('id',7)
                response.body.data.foreach(function(el){
                    expect(el).to.have.property('first_name')
                    expect(el).to.have.property('last_name')
                    expect(el).to.have.property('id')
                    expect(el).to.have.property('email')
                    expect(el).to.have.property('avatar')
                });

            })
    })
    it.only('verify th post request',function(){
        let payload={
            name:"rupali",
            job:"Tester"
        }
        cy.request({
            method:"post",
            url:'https://reqres.in/api/users',
            body:payload
        }).then(function(response){
            cy.log(response)
            expect(response.status).to.eq(201)



        })

    })

})