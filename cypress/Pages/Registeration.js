class Registeration{
    static APPBUILDER_LINK = '.space-x-5 > .flex';
    static COOKIE_BUTTON = '#cc-allow-01';
    static IFRAME = '#hs-form-iframe-0';
    static EMAIL_INPUT = '[name="email"]';
    static COMPANY_INPUT = '[name="0-2/domain"]';
    static CHECKBOX = '[type="checkbox"]';
    static SUBMIT_BUTTON = '[type="submit"]';

    // click on allow cookies if exists
    clickOnCookies(){
        cy.get('body').then(($body) => {
            if ($body.find('#cc-allow-01').length > 0) {
              cy.get(Registeration.COOKIE_BUTTON).click({ force: true });
            } else {
              cy.log('Cookie consent button not found. Skipping...');
            }
          });
    }
    
    // Method to navigate to the sign-up page
    navigateToTryAppBuilder() {
        cy.get(Registeration.APPBUILDER_LINK).click();
    }
    
    // fill the required info
    setInfo(email, companyWebsite) {
        const iframe=cy.get(Registeration.IFRAME).its('0.contentDocument.body').should('be.visible').then(cy.wrap).within(() => {
            // Interact with the email field
            cy.get(Registeration.EMAIL_INPUT).type(email);
      
            // Interact with the company website field
            cy.get(Registeration.COMPANY_INPUT).type(companyWebsite);

            //Check the agreement button
            cy.get(Registeration.CHECKBOX).check();

            //Click on submit button
            cy.get(Registeration.SUBMIT_BUTTON).click();
          });
    }
}
export default Registeration;