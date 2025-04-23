///< reference types="cypress"/>
describe("handleing Iframes",()=>{
    it('approach1',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

       const iframe = cy.get("#mce_0_ifr")
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap);

                //iframe.clear().type('welcome');
    })
    it("verify iframes in cypress ex1",()=>{
    cy.visit('https://jqueryui.com/checkboxradio/')

    cy.get(".demo-frame").then(el=>{
        cy.wrap(el.contents().find("body")).as('iframe')
        cy.get('@iframe').find('.ui-checkboxradio-label.ui-corner-all.ui-button.ui-widget.ui-checkboxradio-radio-label').eq('2').click()
    })
})



    it('iframe example 2',()=>{
    cy.visit('https://webdriveruniversity.com/IFrame/index.html')
    cy.get('#frame').then(function($frame){
        cy.log($frame)
        let iframeBody=$frame.contents().find('body')
        cy.wrap(iframeBody).as('iframe')
        cy.get('@iframe').find('[href="index.html"]').should('have.text','Home')
    })

        
    })
})


