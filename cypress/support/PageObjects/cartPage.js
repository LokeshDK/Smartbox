class cartPage{
    get getItemRowElem(){
        return cy.get(".row.item.item-ebox")
    }

    get getQuantitySelectElem()
    {
        return cy.get(".quote-item-version-qty")
    }

    get getLoadingElem(){
        return cy.get('#light-waiting')
    }

    get getDeleteElem()
    {
        return cy.get(".si.si-bin")
    }

    get getRemoveConfirmElem(){
        return cy.get("#cart-remove-confirm-accept")
    }
}

export default cartPage