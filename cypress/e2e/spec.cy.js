describe('Banking Project Tests', () => {
  it('Should perform the required actions in the Banking Project', () => {
    // Visit the website
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    // Login to managers' portal
    cy.get('button[ng-click="manager()"]').click();
    // Create a customer
    cy.get('button[ng-click="addCust()"]').click();
    cy.get('input[ng-model="fName"]').type('John');
    cy.get('input[ng-model="lName"]').type('Doe');
    cy.get('input[ng-model="postCd"]').type('12345');
    cy.get('button[type="submit"]').click();
    // Open account for the customer
    cy.get('button[ng-click="openAccount()"]').click();
    cy.get('select[ng-model="custId"]').select('John Doe 12345');
    cy.get('select[ng-model="currency"]').select('Dollar');
    cy.get('button[type="submit"]').click();
    // Assert that the customer exists in the customer list
    cy.get('select[ng-model="custId"] option:contains("John Doe 12345")').should('exist');
    // Go back to Home
    cy.contains('Home').click();
    // Log into the customer created
    cy.get('button[ng-click="customer()"]').click();
    cy.get('select[ng-model="custId"]').select('John Doe 12345');
    // Make a deposit
    cy.get('button[ng-click="deposit()"]').click();
    cy.get('input[ng-model="amount"]').type('1000');
    cy.get('button[type="submit"]').click();
    // Withdraw 20% of deposit
    cy.get('button[ng-click="withdrawl()"]').click();
    cy.get('input[ng-model="amount"]').type('{selectall}200');
    cy.get('button[type="submit"]').click();
    // Assert that the balance shown is correct
    cy.get('span[ng-show="depositSuccess"]').should('contain.text', '800');
    // Go back to Home
    cy.contains('Home').click();
    // Go into managers' portal
    cy.get('button[ng-click="manager()"]').click();
    // Delete the customer created
    cy.get('button[ng-click="deleteCust()"]').click();
    cy.get('select[ng-model="custId"]').select('John Doe 12345');
    cy.get('button[type="submit"]').click();
    // Confirm deletion
    cy.on('window:confirm', () => true);
  });
});