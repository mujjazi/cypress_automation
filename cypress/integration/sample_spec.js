describe('Portal Creation', () => {
    it('Portal', () => {
      cy.viewport(1024, 768)

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
  
      // Get an input, type into it and verify that the value has been updated
      //cy.get('//*[@id="editor"]/div/div/div/div[3]/div/div/div[1]/div/div[1]/div/div[6]/div[2]/span').click()
      //cy.get('.blockbuilder-content-tool-icon').click();

    })
  })