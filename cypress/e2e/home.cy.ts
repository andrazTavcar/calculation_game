describe('Home component test', () => {

  it('Click on play button and navigate to game screen', () => {
    cy.visit('/')
    cy.get('[data-testid="startButton"]').click();

    cy.location().should(location => {
      expect(location.pathname).to.eq('/game')
    })
  })
})
