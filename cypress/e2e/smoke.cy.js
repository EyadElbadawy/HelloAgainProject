import Registration from "../Pages/Registeration";
import AppBuilder from "../Pages/AppBuilder";
import CustomerInfo from "../Pages/CustomerInfo";


describe('E2E Testing for the Website', function () {
  Cypress.on('uncaught:exception', function (err, runnable) {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
  });

  // Set up before running tests
  beforeEach(function () {
    cy.viewport(1920, 1080);
    cy.fixture('TestData').as('data');
});

  // Run once before starting the test suite
  before(function () {
    cy.visit('/');
  })
  
  it('User Registration and Shopping Scenario', function () {

    // Ensure the correct website URL
    cy.url().should('eq', 'https://www.helloagain.com/en/');

    const registeration = new Registration();
    const appBuilder = new AppBuilder();
    const customerInfo = new CustomerInfo();

    //Click on allow cookies
    registeration.clickOnCookies();

    // Navigate to the signup page
    registeration.navigateToTryAppBuilder();
    
    //fill the info
    registeration.setInfo(this.data.email, this.data.companyWebsite);

    // Navigate to the app builder
    appBuilder.navigateToAppBuilder();

    // click on Continue button
    appBuilder.clickOnContinue();

    // click on Dashboard button
    appBuilder.clickOnDashboard();

    // click on Customers Tab
    appBuilder.clickOnCustomers();

    // click on Customers button
    appBuilder.clickOnCustomersButton();
    
    // assert on customer email
    appBuilder.assertFirstCustomerEmail(this.data.customerEmail);
    
    // edit first customer name
    appBuilder.clickOnCustomerInfo();
    
    //click on customer info
    customerInfo.clickOnEdit();
    
    //change customer first name
    customerInfo.changeFirstName(this.data.customerFirstName);
    
    //click on save button
    customerInfo.clickOnSave();
    
    // click on Customers button
    appBuilder.clickOnCustomersButton();
    
    // assert on customer new name
    appBuilder.assertFirstCustomerNewName(this.data.customerNewName);
  })
  })
