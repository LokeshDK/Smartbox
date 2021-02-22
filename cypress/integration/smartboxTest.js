// type definitions for Cypress object "cy"
/// <reference types="cypress" />
 
describe('User add gift in cart from popular section', ()=>
{
    it('Application should launch successfully', ()=>
    {
        cy.viewport(1920, 1080)

        cy.visit("www.smartbox.com/ie");
    })

    it('Verify there are multiple options in popular gift section', ()=>
    {
        cy.get(".row.carousel-products.js-product-list").first().children().should('have.length',2)
    })

    it('Click on See More of first option in Popular gift section', ()=>
    {
       const popularSect = cy.get(".row.carousel-products.js-product-list").first().children().first().find("div[class^=\"thematic large-3 medium-3 columns\"]")

       popularSect.eq(2).should('be.visible').click()
    })

    it('Verify that application has navigated to gift confirmation screen', ()=>
    {
       cy.url().should('contain', 'https://www.smartbox.com/ie/our-smartbox')
    })

    it('Click on Add to Cart button', ()=>
    {
        cy.get(".button.add-to-cart.primary.box-type-ebox.center.js-add-to-cart", { timeout: 10000 }).should('be.visible').first().click()
    })

    it('Click on Go to Cart button for confirmation', ()=>
    {
        cy.get(".button.primary.no-margin-bottom", { timeout: 10000 }).should('be.visible').first().click()
    })

    it('Verify that application has navigated to cart screen', ()=>
    {
       cy.url().should('contain', 'https://www.smartbox.com/ie/checkout/cart')
    })

    it('Verify that item is added in the cart', ()=>
    {
        // cy.wait(5000)

        // cy.get(".quote-item-version-qty", { timeout: 10000 }).should('be.visible').select('3')

        cy.get(".row.item.item-ebox", { timeout: 10000 }).should('be.visible')

        // cy.get('#light-waiting').should('not.exist');
    })

    it('Verify that user change the quantity of the selected product', ()=>
    {
        cy.get(".row.item.item-ebox", { timeout: 10000 }).should('be.visible')

        cy.get(".quote-item-version-qty").select('3')

        cy.get('#light-waiting').should('be.visible');
    })
})