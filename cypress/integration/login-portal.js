describe('Login and Import Test', () => {
    it('Logs in and Imports a API spec', () => {
      
      const xpath = require('cypress-xpath')

      cy.visit(Cypress.config().baseUrl)  
      cy.get('a[href*="login"]').click()
      cy.get('#Email').click();
      cy.get('#Email').type('mujtaba.mehdi@apimatic.io');
      cy.get('#js-onboarding-password-field').click();
      cy.get('#js-onboarding-password-field').type('testtest');
      // simulate clicking submit
      cy.get('button[type=submit]').click();
      // Should be on a new URL which includes '/dashboard'
      cy.url().should('include', 'apimatic.io/dashboard')
      cy.wait(6000)

      //Check for already present api card and delete it if present
      cy.get("body").then($body => {
        if ($body.find('.delete-api').length > 0) {   //evaluates as true
          cy.get('.delete-api').first().click()
          cy.get('[ng-hide="allSelected"]').contains('Select All').click()
          cy.get('[ng-click="screen_1_primaryButtonClicked()"]').first().click()
          cy.get('[ng-click="DeleteAPIVersion()"]').first().click()
          cy.wait(6000) // wait for 2 seconds
        }
    });
// check for an already present welcome tour and skip it
      cy.get("body").then($body => {
        if ($body.find('[ng-click="$ctrl.skipOnboarding()"]').length > 0) {   //evaluates as true
          cy.get('[ng-click="$ctrl.skipOnboarding()"]').click();
        }
    });

      cy.get('.import-api').click();
      cy.wait(5000) // wait for 2 seconds
      cy.xpath("//div[@class='modal-content']//input[@placeholder='Recommended for relative path references e.g., imports and includes']").type('https://github.com/mujjazi/Cypress_Jenkins/blob/master/bookingpal.json-Swagger20.json');
      cy.wait(2000) // wait for 4 seconds
      cy.get('[name="importApiForm"]').eq(0).submit()   // Submit a form
      cy.wait(14000)
      //cy.get('.api-card').should('include','Channel Management API');
      cy.contains('Channel Management API').should('be.visible') 
    })
  })
