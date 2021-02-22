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

     Scenario: User is able to increase the quantity of the selected product in the cart
        Given User navigates to the Smartbox homepage
        When Verify there are multiple options in popular gift section
        And Click on See More of first option in Popular gift section
        And Verify that application has navigated to gift confirmation screen
        And Click on Add to Cart button
        And Click on Go to Cart button for confirmation
        And Verify that application has navigated to cart screen
        Then The product should be added to the cart
        And Change the quantity value
        Then Verify that updated quantity is appearing correctly
        And Wait for some time

     Scenario: User is able to remove the product from the cart
        Given User navigates to the Smartbox homepage
        When Verify there are multiple options in popular gift section
        And Click on See More of first option in Popular gift section
        And Verify that application has navigated to gift confirmation screen
        And Click on Add to Cart button
        And Click on Go to Cart button for confirmation
        And Verify that application has navigated to cart screen
        Then The product should be added to the cart
        And Click on delete button of the product
        And Click on clear the cart option from the pop up
        Then Application naviagtes to home page
        And Cart tooltip should appear as empty