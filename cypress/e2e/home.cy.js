describe('Automation Exercise - Homepage', () => {
  it('TC_HOME_001 - User berhasil membuka homepage', () => {
    cy.visit('https://automationexercise.com')
    cy.title().should('include', 'Automation Exercise')
  })
})
