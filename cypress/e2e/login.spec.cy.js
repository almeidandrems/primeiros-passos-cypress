describe('Orange HRM Tests', () => {

const selectorList = { 
  usernameFileld: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '.oxd-button',
  sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  wrongCredentialAlert: "[role='alert']",
}

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFileld).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopbar).contains('Dashboard') 
  })
  it('Login com falha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFileld).type('teste')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    cy
  })
})