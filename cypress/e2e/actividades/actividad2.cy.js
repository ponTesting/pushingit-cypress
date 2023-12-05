describe('Actividad 2 SELECTORES', () => {
  const numero = Math.floor(Math.random() * 1000);
  it('Registro', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('div').children('#user').type(`user${numero}`);
    cy.get('input#pass').type('pushingit1!');
    cy.get('[value="Male"]').check({ force: true });
    cy.get('select#day').parent('div').type(1);
    cy.get('div').children('select#month').select(11);
    cy.get("select[name='year']").select('1994');
    cy.contains('button', 'Register').click();
    cy.wait(10000);
    cy.get('[class="chakra-button css-19zf2sf"]').click();
  });

  it('Login', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('#registertoggle').dblclick();
    cy.get('#user').type(`user${numero}`);
    cy.get('#pass').type('pushingit1!');
    cy.get('#submitForm').click();
  });
});
