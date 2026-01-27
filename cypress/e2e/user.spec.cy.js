import userData from '../fixtures/users/user-data.json'
import LoginPage from "../pages/loginPage"
import DashboardPage from '../pages/dashboradPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

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


  it.only('User Info Updade com sucesso', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.chekDashbordPage()
    menuPage.acessMyInfo()
    

    cy.get(selectorList.firstNameField).clear().type('FistnameTeste')
    cy.get(selectorList.lastNameField).clear().type('LastNameTeste')
    cy.get(selectorList.genericField).eq(3).clear().type('Teste1')
    cy.get(selectorList.genericField).eq(4).clear().type('Teste2')
    cy.get(selectorList.genericField).eq(5).clear().type('Teste3')
    cy.get(selectorList.genericField).eq(7).clear().type('2026-01-26')
    cy.get(selectorList.closeButtonFiel).click()
    cy.get(selectorList.genericField).eq(8).clear().type('Teste4')

    //cy.get(selectorList.genericField).eq(9).clear().type('Teste5')
    //cy.get(selectorList.genericField).eq(10).clear().type('2026-01-26')
    //cy.get(selectorList.closeButtonFiel).click()

    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.secondItemComobobox).click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get(selectorList.thirdItemComobobox).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain.text', 'Successfully Updated')
    cy.get('.oxd-toast-close').click()

  })

  it('Login com falha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFileld).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})