class homepage{
    get getProductRowElem(){
       return cy.get(".row.carousel-products.js-product-list")
    }

    get getCartTooltipElem(){
        return cy.get(".empty-cart.reveal__tooltip")
    }
}

export default homepage