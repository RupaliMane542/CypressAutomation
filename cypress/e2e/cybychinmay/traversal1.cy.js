///<reference types="cypress"/>





describe('traversal methods in cypress',function(){
    it('To get children of DOM elements, use the .children() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
        cy.get('.traversal-drinks-list').children().each(function(el){
            cy.log(el.text())
        })
    })


    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text','Figs')
    })

    it('To get the next sibling DOM element within elements, use the .next() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text','Asparagus')
    })


    it('To get the first DOM element within elements, use the .first() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').children().first()
        .should('have.text','Types of Jobs')

    })


    it('To get descendant DOM elements of the selector, use the .find() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first()
        .should('have.text','Fruits')
        .should('have.class','list-header')
        .should('have.id','fruits')
        .should('have.attr','id','fruits')
    })
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last()
        .should('have.text','Lentils')
        
    })
    it('To get a DOM element at a specific index, use the .eq() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(2)
        .should('have.text','Banana')
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.disabled').siblings().should('have.length',3)
        cy.get('.disabled').siblings().each(function(el){
        cy.log(el.text())
        })
    })


    it('To get all previous sibling DOM elements within elements, use the .prevAll() command',function(){
        cy.visit('To get all previous sibling DOM elements within elements, use the .prevAll() command.')
        cy.get('#veggie').prevAll().as('aboveElement')
        cy.get('@aboveElement').should('have.length',6)

        let elFound=false
        cy.get('@aboveElement').each(function(el){
            if(ElementInternals.text()=='Banana'){
                elFound=true
            }
        }).then(function(){
            expect(elFound).to.eq(true)
        })
       
    })


    it('To get the next sibling DOM element within elements, use the .nextAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length',5)
            
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
    })
    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').siblings().each(function(el){
            cy.log(el.text())
        })
    })





    

})