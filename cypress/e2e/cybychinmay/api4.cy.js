describe('verify end to end call create update delete', () => {
    it('verify the post, patch and delete request', () => {
        let id;
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenalima${Math.floor(Math.random() * 10000)}.ramakrishna@15ce.com`,
                status: "active"
            },
            headers: {
                Authorization: `Bearer 24cf92362ccb4320c9463ddceedae24411e20e4986d4add85e2c96a65968c523`
            }
        })
            .then(function (response) {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                id = response.body.id
            })


            .then(function (response) {
                cy.request({
                    method: "PATCH",
                    url: `https://gorest.co.in/public/https://gorest.co.in/public/v2/users/${id}`,
                    body: {
                        name: "Rupesh mane",
                        gender: "male",
                        email: `tenalima${Math.floor(Math.random() * 10000)}.ramakrishna@15ce.com`,
                        status: "active"
                    },
                    headers: {
                        Authorization: `Bearer 24cf92362ccb4320c9463ddceedae24411e20e4986d4add85e2c96a65968c523`
                    }

                })
                    .then(function (response) {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                    })


            })
            .then(function(){
                cy.request({
                    method: "DELETE",
                    url: "https://gorest.co.in/public/v2/users/1902",
                    body: {
                        name: "Rupesh mane",
                        gender: "male",
                        email: `tenalima${Math.floor(Math.random() * 10000)}.ramakrishna@15ce.com`,
                        status: "active"
                    },
                    headers: {
                        Authorization: `Bearer 24cf92362ccb4320c9463ddceedae24411e20e4986d4add85e2c96a65968c523`
                    }
                })
                .then(function(response){
                    expect(response.status).to.eq(204)
                })
            })
    })

})

