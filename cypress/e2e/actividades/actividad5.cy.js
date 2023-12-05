describe('Actividad complementaria 5', () => {
  const espera = 10000;

  beforeEach('Prcondiciones', () => {
    cy.visit('');
    cy.get('#registertoggle').dblclick();
    cy.get('#user').type('pushingit');
    cy.get('#pass').type('123456!');
    cy.get('#submitForm').click();
    cy.get(`[id*='user_pushingit']`, { timeout: espera }).should('exist');
    cy.get('#waitslink').click();
    cy.get('button#wait').dblclick();
  });

  it('Esperas con wait', () => {
    cy.get('#wait').dblclick();
    cy.wait(20000);
    cy.get('[id="message"]').should('exist');
  });

  it('Esperas sin wait', () => {
    cy.get('#wait').dblclick();
    cy.get('[id="message"]', { timeout: espera }).should(
      'have.text',
      'You have waited for ten seconds, CONGRATULATIONS'
    );
  });

  it('Esperas sin wait segundo mensaje', () => {
    cy.get('#wait').dblclick();
    cy.get('[id="message"]', { timeout: espera * 2 }).should(
      'have.text',
      'You are a man of patience and have waited fifteen seconds'
    );
  });
});
