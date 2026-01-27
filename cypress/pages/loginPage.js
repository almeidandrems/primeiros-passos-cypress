class LoginPage {
  selectorList () {
    const selectorList = {
        usernameFileld: '[name="username"]',
        passwordField: '[name="password"]',
        loginButton: '.oxd-button',
        wrongCredentialAlert: "[role='alert']",
      }
      return selectorList
  }
  acessLoginPage() {
    cy.visit('/auth/login')
  }


  loginWithUser(username, password) {
    cy.get(this.selectorList().usernameFileld).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().loginButton).click()
  }
}

export default LoginPage