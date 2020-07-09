describe('Portal Creation', () => {
    it('Portal', () => {

      var randomInteger = function(maxInt) {
        return Math.floor(Math.random() * (maxInt + 1));
    };

      const user = {
        name: 'Automated Test',
        username: 'mujtaba.mehdi',
        domain:  '@apimatic.io',
        rand: randomInteger(9),
        email: user.username+user.rand+user.domain,
        password: 'Pakistan@123',
        number: 123456789
      }
      cy.viewport(1920,1080)

      cy.visit('https://apimatic.io/')
      
      cy.get('a[href*="register"]').click()
      cy.get('#signUpInputName').type(user.name)
      cy.get('#signUpInputEmail').type(user.email)
      cy.get('#signUpInputPassword').type(user.password)
      cy.get('#signUpInputCompany').type(user.name)
      cy.get('#signUpInputPhoneNumber').type(user.number)
      cy.get('[data-sitekey="6LdiJaYZAAAAALVNZs7si7T8k1YtVZHNc_auC4Hx"]').click
      
      //cy.get('//*[@id="gatsby-focus-wrapper"]/div/nav/div/button').click();
      cy.get('a[href*="login"]').click()

      cy.get('#Email').click();
      cy.get('#Email').type('mujtaba.mehdi@apimatic.io');

      
      cy.get('#js-onboarding-password-field').click();
      cy.get('#js-onboarding-password-field').type('Pakistan@123');

      // simulate clicking submit
      cy.get('button[type=submit]').click();
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', 'apimatic.io/dashboard')

      cy.get("body").then($body => {
        if ($body.find('[ng-click="$ctrl.skipOnboarding()"]').length > 0) {   //evaluates as true
          cy.get('[ng-click="$ctrl.skipOnboarding()"]').click();
        }
    });

    cy.get("body").then($body => {
      if ($body.find('.delete-api').length > 0) {   //evaluates as true
        cy.get('.delete-api').first().click()
        cy.get('[ng-hide="allSelected"]').contains('Select All').click()
        cy.get('[ng-click="screen_1_primaryButtonClicked()"]').first().click()
        cy.get('[ng-click="DeleteAPIVersion()"]').first().click()

        cy.wait(4000) // wait for 2 seconds
      }
  });

      cy.get('.import-api').click();
      cy.wait(4000) // wait for 2 seconds

      cy.get('div.modal-body').find('input[ng-model="importUrl"]').type('https://github.com/mujjazi/Cypress_Jenkins/blob/master/bookingpal.json-Swagger20.json');

      // simulate clicking import
      //cy.get('[@id="apiImportModal"]/div/div[3]/div/form/div[2]/input[1]').click();
      cy.wait(4000) // wait for 2 seconds

      cy.get('[name="importApiForm"]').eq(0).submit()   // Submit a form
      
      cy.wait(2000)

     // cy.get("body").then($body => {
      //cy.get('body').click(500, 500)
      //});
      //cy.get('[data-dismiss="modal"]').click();
  

      cy.get('.api-card').contains('Channel Management API');
  
      // Get an input, type into it and verify that the value has been updated
      //cy.get('//*[@id="editor"]/div/div/div/div[3]/div/div/div[1]/div/div[1]/div/div[6]/div[2]/span').click()
      //cy.get('.blockbuilder-content-tool-icon').click();

    })
  })