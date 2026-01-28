import userData from '../fixtures/users/user-data.json'
import LoginPage from "../pages/loginPage"
import DashboardPage from '../pages/dashboradPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Updade com sucesso', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashbordPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmploymentDetails('Teste3', 'Teste4', 'Teste5', '2026-01-26' ,'Teste6')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })
})