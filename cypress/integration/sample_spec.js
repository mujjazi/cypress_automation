describe('Registration Test', () => {
    it('Email Registration', () => {
      cy.visit('https://apimatic.io/')
  
      cy.pause()
  
      cy.contains('Sign Up for Free').click()
  
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/account/register?email=')
  
      // Get an input, type into it and verify that the value has been updated
      //cy.get('//*[@id="editor"]/div/div/div/div[3]/div/div/div[1]/div/div[1]/div/div[6]/div[2]/span').click()
      //cy.get('.blockbuilder-content-tool-icon').click();

    })
  })