describe('Page title test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.title().should('equal', 'CalculationGame');
  })
})
