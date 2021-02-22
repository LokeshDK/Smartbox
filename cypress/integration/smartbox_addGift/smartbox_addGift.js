import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../support/PageObjects/homePage';
import giftBoxPage from '../../support/PageObjects/giftBoxPage';
import cartPage from '../../support/PageObjects/cartPage';


    const home = new homePage();
    const giftBox = new giftBoxPage();
    const cart = new cartPage();

    Given('User navigates to the Smartbox homepage', () => {
        cy.visit('www.smartbox.com/ie')
    });

    When('Verify there are multiple options in popular gift section', () => {
        home.getProductRowElem.first().children().should('have.length',2)
        // cy.get(".row.carousel-products.js-product-list").first().children().should('have.length',2)
    });

    And('Click on See More of first option in Popular gift section', () => {
        const popularSect = home.getProductRowElem.first().children().first().find("div[class^=\"thematic large-3 medium-3 columns\"]")

        popularSect.eq(2).should('be.visible').click()
    });

    And('Verify that application has navigated to gift confirmation screen', () => {
        cy.url().should('contain', 'https://www.smartbox.com/ie/our-smartbox')
    });

    And('Click on Add to Cart button', () => {
        giftBox.getAddToCartElem.should('be.visible').click()
        //cy.get(".button.add-to-cart.primary.box-type-ebox.center.js-add-to-cart", { timeout: 10000 }).should('be.visible').first().click()
    });

    And('Click on Go to Cart button for confirmation', () => {
        giftBox.getAddConfirmationElem.should('be.visible').click()
        //cy.get(".button.primary.no-margin-bottom", { timeout: 10000 }).should('be.visible').first().click()
    });

    And('Verify that application has navigated to cart screen', () => {
        cy.url().should('contain', 'https://www.smartbox.com/ie/checkout/cart')
    });

    Then('The product should be added to the cart', () => {
        cart.getItemRowElem.should('be.visible')
        //cy.get(".row.item.item-ebox", { timeout: 10000 }).should('be.visible')
    });

    And('Change the quantity value', () => {
        cart.getQuantitySelectElem.select('3')
        //cy.get(".quote-item-version-qty").select('3')
        cart.getLoadingElem.should('not.be.visible')
        // cy.get('#light-waiting').should('not.be.visible');
    });

    Then('Verify that updated quantity is appearing correctly', () => {
        cart.getQuantitySelectElem.find(':selected').contains('3').should('be.visible')
        //cy.get(".quote-item-version-qty").find(':selected').contains('3').should('be.visible')
    });

    And('Wait for some time', () => {
        cy.wait(5000)
    });

    And('Click on delete button of the product', () => {
        cart.getDeleteElem.click()
        // cy.get(".si.si-bin").click()
    });

    And('Click on clear the cart option from the pop up', () => {
        cart.getRemoveConfirmElem.should('be.visible').click()
        // cy.get("#cart-remove-confirm-accept", { timeout: 10000 }).should('be.visible').click()
        cart.getLoadingElem.should('not.exist')
        // cy.get('#light-waiting').should('not.exist');
    });

    Then('Application naviagtes to home page', () => {
        cy.url().should('contain', 'https://www.smartbox.com/ie/')
    });

    And('Cart tooltip should appear as empty', () => {
        home.getCartTooltipElem.should('have.text', 'Your cart is empty')
        // cy.get(".empty-cart.reveal__tooltip", { timeout: 10000 }).should('have.text', 'Your cart is empty')
    });