


function randomnum (maxInt) {
    return Math.floor(Math.random() * (maxInt + 1));
  }


describe('Register a new user', () => {
    it('Registers a new user', () => {

Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    var name = 'mujtaba'
    var username = 'mujtaba.mehdi'
    var domain =  '@apimatic.io'
    var rand = '+' + randomnum(10000)
    var randemail = username+rand+domain
    var number =  123456789
    var password = 'Pakistan@123'
    
    
    cy.visit(Cypress.config().baseUrl)  
    cy.get('a[href*="register"]').first().click()
    cy.get('#signUpInputName').type(name)
    cy.get('#signUpInputEmail').type(randemail)
    cy.get('#signUpInputPassword').type(password)
    cy.get('#signUpInputCompany').type(name)
    cy.get('#signUpInputPhoneNumber').type(number)
    cy.get('[data-sitekey="6LdiJaYZAAAAALVNZs7si7T8k1YtVZHNc_auC4Hx"]').click();
    cy.wait(5000);

    cy.get("body").then($body => {
        if ($body.find('.content').length > 0) {
    cy.get('.content').contains('Please check your email and confirm your email address');
}
});

    })
})