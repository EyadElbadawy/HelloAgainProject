class AppBuilder{
    static APP_BUILDER = '.rounded-3xl > .absolute';
    static CONTINUE_BUTTON = '.modal-footer > .primary';
    static Dashboard_BUTTON = '.modal-footer > .secondary';
    static CUSTOMERS_TAB = ':nth-child(4) > .treeview-container > .header-contacts';
    static CUSTOMERS_Button = 'a[href="#/users"]';
    static FIRST_CUSTOMER_EMAIL = 'tbody > :nth-child(1) > :nth-child(5)';
    static FIRST_CUSTOMER_NAME = 'tbody > :nth-child(1) > :nth-child(2)';
    static FIRST_CUSTOMER_INFO = ':nth-child(1) > :nth-child(12) > .btn';

    // Method to navigate to the app builder
    navigateToAppBuilder() {
        cy.get(AppBuilder.APP_BUILDER).invoke("removeAttr", "target").click();
    }

    //Method to click on continue button
    clickOnContinue(){
        cy.get(AppBuilder.CONTINUE_BUTTON, { timeout: 20000 }).should('be.visible').click();
    }

    //Method to click on dashboard button
    clickOnDashboard(){
        cy.get(AppBuilder.Dashboard_BUTTON).should('be.visible').click();
    }

    //Method to click on customers tab
    clickOnCustomers(){
        cy.get(AppBuilder.CUSTOMERS_TAB).should('be.visible').click();
    }

    //Method to click on customers button
    clickOnCustomersButton(){
        cy.get(AppBuilder.CUSTOMERS_Button).should('be.visible').click();
    }

    //Method to assert on customer email
    assertFirstCustomerEmail(customerEmail){
        cy.get(AppBuilder.FIRST_CUSTOMER_EMAIL).should('have.text', customerEmail);
    }
    
    //Method to click on edit first customer
    clickOnCustomerInfo(){
        cy.get(AppBuilder.FIRST_CUSTOMER_INFO).click();
    }
    
    //Method to assert on customer new name
    assertFirstCustomerNewName(customerNewName){
        cy.get(AppBuilder.FIRST_CUSTOMER_NAME).should('have.text', customerNewName);
    }
}
export default AppBuilder;