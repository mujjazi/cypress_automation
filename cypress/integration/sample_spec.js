describe('Login and Import Test', () => {
    it('Logs in and Imports a API spec', () => {

      var randomInteger = function(maxInt) {
        return Math.floor(Math.random() * (maxInt + 1));
    };
      
      cy.visit('https://www.apimatic.io/')  
      cy.get('a[href*="login"]').click()

      cy.get('#Email').click();
      cy.get('#Email').type('mujtaba.mehdi@apimatic.io');

      
      cy.get('#js-onboarding-password-field').click();
      cy.get('#js-onboarding-password-field').type('Pakistan@123');

      // simulate clicking submit
      cy.get('button[type=submit]').click();
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', 'apimatic.io/dashboard')
      cy.wait(5000)

      cy.get("body").then($body => {
        if ($body.find('.delete-api').length > 0) {   //evaluates as true
          cy.get('.delete-api').first().click()
          cy.get('[ng-hide="allSelected"]').contains('Select All').click()
          cy.get('[ng-click="screen_1_primaryButtonClicked()"]').first().click()
          cy.get('[ng-click="DeleteAPIVersion()"]').first().click()
  
          cy.wait(4000) // wait for 2 seconds
        }
    });

      cy.get("body").then($body => {
        if ($body.find('[ng-click="$ctrl.skipOnboarding()"]').length > 0) {   //evaluates as true
          cy.get('[ng-click="$ctrl.skipOnboarding()"]').click();
        }
    });



      cy.get('.import-api').click();
      cy.wait(4000) // wait for 2 seconds

      cy.get('div.modal-body').find('input[ng-model="importUrl"]').type('https://github.com/mujjazi/Cypress_Jenkins/blob/master/bookingpal.json-Swagger20.json');

     
      cy.wait(4000) // wait for 4 seconds

      cy.get('[name="importApiForm"]').eq(0).submit()   // Submit a form
      
      cy.wait(8000)


      cy.get('.api-card').should('include','Channel Management API');

    })
  })