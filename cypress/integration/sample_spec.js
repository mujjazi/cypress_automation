describe('Portal Creation', () => {
    it('Portal', () => {
      cy.viewport(1920,1080)

      cy.visit('https://apimatic.io/')
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

      cy.get('.import-api').click();
      cy.wait(4000) // wait for 2 seconds

     // cy.get('input[name=importUrl]').eq(1).click();
      //cy.get('importUrl').click();
      cy.get('input[name=importUrl]').eq(1).type('https://github.com/mujjazi/Cypress_Jenkins/blob/master/bookingpal.json-Swagger20.json');

      // simulate clicking import
      //cy.get('[@id="apiImportModal"]/div/div[3]/div/form/div[2]/input[1]').click();
      cy.wait(4000) // wait for 2 seconds

      cy.get('[name="importApiForm"]').eq(1).submit()   // Submit a form
      
      cy.wait(4000)

      cy.get('[data-dismiss="modal"]').click();
      

      cy.get('.api-card').contains('Channel Management API');
  
      // Get an input, type into it and verify that the value has been updated
      //cy.get('//*[@id="editor"]/div/div/div/div[3]/div/div/div[1]/div/div[1]/div/div[6]/div[2]/span').click()
      //cy.get('.blockbuilder-content-tool-icon').click();

    })
  })