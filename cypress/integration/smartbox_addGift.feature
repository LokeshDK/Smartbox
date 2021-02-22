Feature: User adds a gift in cart from popular section

    Scenario: User is able to add a product to the cart
        Given User navigates to the Smartbox homepage
        When Verify there are multiple options in popular gift section
        And Click on See More of first option in Popular gift section
        And Verify that application has navigated to gift confirmation screen
        And Click on Add to Cart button
        And Click on Go to Cart button for confirmation
        And Verify that application has navigated to cart screen
        Then The product should be added to the cart