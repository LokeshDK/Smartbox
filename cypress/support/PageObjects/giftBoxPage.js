class giftBoxPage{
    get getAddToCartElem(){
        return cy.get(".button.add-to-cart.primary.box-type-ebox.center.js-add-to-cart").first()
     }

     get getAddConfirmationElem(){
         return cy.get(".button.primary.no-margin-bottom").first()
     }
}

export default giftBoxPage