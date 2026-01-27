class MenuPage {
  
    selectorList () {
        const selectorList = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

        }
        return selectorList
    }
    acessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
    }
}

    export default MenuPage