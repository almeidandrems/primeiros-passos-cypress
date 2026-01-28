class MyInfoPage {

    selectorList () {
        const selectorList = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: ".oxd-input--active",
            dateFiel: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemComobobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComobobox: ".oxd-select-dropdown > :nth-child(3)",
            closeButtonFiel: ".--close",
            submitButton: "[type='submit']",
        }
        return selectorList
    }

    fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorList().firstNameField).clear().type(firstName)
    cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmploymentDetails(employeeId, otherId, DriversLicense, LicenseExpiry, TestField) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorList().genericField).eq(5).clear().type(DriversLicense)
    cy.get(this.selectorList().genericField).eq(6).clear().type(LicenseExpiry)
    cy.get(this.selectorList().closeButtonFiel).click()
    cy.get(this.selectorList().genericField).eq(8).clear().type(TestField)
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get('body').should('contain.text', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    
    }

    fillStatus() {
        cy.get(this.selectorList().genericCombobox).eq(0).click()
        cy.get(this.selectorList().secondItemComobobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click()
        cy.get(this.selectorList().thirdItemComobobox).click()
    }
}
    export default MyInfoPage