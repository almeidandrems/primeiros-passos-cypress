import userData from '../fixtures/users/user-data.json'
import LoginPage from "../pages/loginPage"
import DashboardPage from '../pages/dashboradPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

  it('Login com falha', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()

  })

  it('Login com Sucesso', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashbordPage()
  })
})