describe('Actividad 1', () => {
  const numero = Math.floor(Math.random() * 1000);
  it('Registro', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('#user').type(`user${numero}`);
    cy.get('#pass').type('pushingit1!');
    cy.get('[value="Male"]').check({ force: true });
    cy.get('#day').select('1');
    cy.get('#month').select(11);
    cy.get('#year').select('1994');
    cy.get('#submitForm').click();
    cy.wait(5000);
    cy.get('#logout').click();
  });

  it('Login', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('#registertoggle').dblclick();
    cy.get('#user').type(`user${numero}`);
    cy.get('#pass').type('pushingit1!');
    cy.get('#submitForm').click();
  });
});
