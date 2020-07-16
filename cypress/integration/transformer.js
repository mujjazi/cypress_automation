import 'cypress-file-upload';
describe('Transformer Test', () => {
    it('Logs in and Performs a transformation', () => {
            
      const xpath = require('cypress-xpath')

      //Login flow
      cy.visit(Cypress.config().baseUrl)  
      cy.get('a[href*="login"]').click()
      cy.get('#Email').click();
      cy.get('#Email').type('mujtaba.mehdi@apimatic.io');
      cy.get('#js-onboarding-password-field').click();
      cy.get('#js-onboarding-password-field').type('Pakistan@123');
      // simulate clicking submit
      cy.get('button[type=submit]').click();
      // Should be on a new URL which includes '/dashboard'
      cy.url().should('include', 'apimatic.io/dashboard')
      cy.wait(5000)

      //Check for already present api card and delete it if present
      cy.get("body").then($body => {
        if ($body.find('.delete-api').length > 0) {   //evaluates as true
          cy.get('.delete-api').first().click()
          cy.get('[ng-hide="allSelected"]').contains('Select All').click()
          cy.get('[ng-click="screen_1_primaryButtonClicked()"]').first().click()
          cy.get('[ng-click="DeleteAPIVersion()"]').first().click()
          cy.wait(4000) // wait for 2 seconds
        }
    });

    // check for an already present welcome tour and skip it
      cy.get("body").then($body => {
        if ($body.find('[ng-click="$ctrl.skipOnboarding()"]').length > 0) {   //evaluates as true
          cy.get('[ng-click="$ctrl.skipOnboarding()"]').click();
        }
    });

        cy.contains('Transform API').click();
        //cy.get('[ng-show="!$ctrl.fileInput"]').click();
        //const yourFixturePath = 'Sabre-APImatic.json';
        //cy.get('[data-cy="file-input"]').attachFile(yourFixturePath);

        cy.get('#apiDescriptionURL').type('https://petstore.swagger.io/v2/swagger.json');
        cy.wait(2000) // wait for 2 seconds
        cy.get('[name="transformerImportForm"]').eq(0).submit()   // Submit a form
        cy.wait(6000) // wait for 8 seconds
        if (window.Cypress) {
          setTimeout(() => location.reload(), 3000);
        }
        cy.wait(4000)
       //cy.xpath("//div[@class='ng-binding']//a[@class='cancelButton btn btn-default center-block'][contains(text(),'Proceed')]").click()
     // cy.xpath("//a[@class='btn btn-default center-block']").click()
        cy.contains('Validation Successful').should('be.visible')              // Assert that element is visible
        
    }); 
});