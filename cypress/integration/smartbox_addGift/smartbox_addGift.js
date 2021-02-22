import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

    Given('User navigates to the Smartbox homepage', () => {
        cy.visit('www.smartbox.com/ie')
    });

    When('Verify there are multiple options in popular gift section', () => {
        cy.get(".row.carousel-products.js-product-list").first().children().should('have.length',2)
    });

    And('Click on See More of first option in Popular gift section', () => {
        const popularSect = cy.get(".row.carousel-products.js-product-list", { timeout: 10000 }).should('be.visible').first().children().first().find("div[class^=\"thematic large-3 medium-3 columns\"]")

        popularSect.eq(2).should('be.visible').click()
    });

    And('Verify that application has navigated to gift confirmation screen', () => {
        cy.url().should('contain', 'https://www.smartbox.com/ie/our-smartbox')
    });

    And('Click on Add to Cart button', () => {
        cy.get(".button.add-to-cart.primary.box-type-ebox.center.js-add-to-cart", { timeout: 10000 }).should('be.visible').first().click()
    });

    And('Click on Go to Cart button for confirmation', () => {
        cy.get(".button.primary.no-margin-bottom", { timeout: 10000 }).should('be.visible').first().click()
    });

    And('Verify that application has navigated to cart screen', () => {
        cy.url().should('contain', 'https://www.smartbox.com/ie/checkout/cart')
    });

    Then('The product should be added to the cart', () => {
        // cy.url().should('contain', 'https://www.smartbox.com/ie/checkout/cart')

        cy.get(".row.item.item-ebox", { timeout: 10000 }).should('be.visible')

        // cy.get(".button.add-to-cart.primary.box-type-ebox.center.js-add-to-cart", { timeout: 10000 }).should('be.visible')
    });