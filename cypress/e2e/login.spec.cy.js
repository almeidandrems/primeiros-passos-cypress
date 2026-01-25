import userData from '../fixtures/users/user-data.json'
describe('Orange HRM Tests', () => {

const selectorList = { 
  usernameFileld: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  dashbordGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",
}


  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFileld).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbordGrid) 
  })
  it('Login com falha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFileld).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})