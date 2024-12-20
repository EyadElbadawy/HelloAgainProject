class CustomerInfo{
    static CUSTOMER_EDIT_BUTTON = '.details-footer > .btn-primary';
    static FIRST_NAME_BAR= '#first_name';
    static SAVE_BUTTON= 'div > .btn-success';

    // Method to click on edit button
    clickOnEdit() {
        cy.get(CustomerInfo.CUSTOMER_EDIT_BUTTON).click();
    }
    
    // Method to change first name
    changeFirstName(customerFirstName) {
        cy.get(CustomerInfo.FIRST_NAME_BAR).clear().type(customerFirstName);
    }

    // Method to click on save button
    clickOnSave() {
        cy.get(CustomerInfo.SAVE_BUTTON).click();
    }

}
export default CustomerInfo;