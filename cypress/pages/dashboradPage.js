class DashboardPage {
  
    selectorList () {
        const selectorList = {
            dashbordGrid: '.orangehrm-dashboard-grid',
        }
        return selectorList
  
    }

    checkDashbordPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashbordGrid).should('be.visible')
  }

}

    export default DashboardPage