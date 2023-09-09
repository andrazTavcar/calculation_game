describe('Game component test', () => {

  it('Insert equation result and see equation validation output', () => {
    cy.visit('/game')

    // We have two input elements in DOM, so we take last one(Result input element)
    cy.get('[data-testid="inputElement"]').last().type('55{enter}', {force: true});
    cy.get('[data-testid="listElement"]')
    .should('have.length', 1)
    .each(item => expect(item.text()).to.contain("55"));
  });
})
