import userData from '../fixtures/users/user-data.json'
describe('Orange HRM Tests', () => {

const selectorList = { 
  usernameFileld: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  dashbordGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  lastNameField: '[name="lastName"]',
  genericField: ".oxd-input--active",
  dateFiel: "[placeholder='yyyy-dd-mm']",
  closeButtonFiel: ".--close",
  submitButton: "[type='submit']",
}


  it.only('User Info Updade com sucesso', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameFileld).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbordGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FistnameTeste')
    cy.get(selectorList.lastNameField).clear().type('LastNameTeste')
    cy.get(selectorList.genericField).eq(3).clear().type('Teste1')
    cy.get(selectorList.genericField).eq(4).clear().type('Teste2')
    cy.get(selectorList.genericField).eq(5).clear().type('Teste3')
    cy.get(selectorList.genericField).eq(7).clear().type('2026-01-26')
    cy.get(selectorList.closeButtonFiel).click()
    cy.get(selectorList.genericField).eq(8).clear().type('Teste4')
    cy.get(selectorList.genericField).eq(9).type('Teste5')
    cy.get(selectorList.genericField).eq(10).clear().type('2026-01-26')
    cy.get(selectorList.closeButtonFiel).click()
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