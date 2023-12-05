// ACTIVIDAD COMPLEMENTARIA 4 FIXTURES
// crea un fixture con las siguientes keys
// username (el username debe ser inexistente)
// pasword (la password debe ser valida) //123456!
// mensajeError (el mensaje de error lo tienes que copiar de la pagina ) //Credentials were not found

// usa before para acceder al fixture y obtener los datos
// beforeEach para visitar la pagina y dirigirse al login

/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
  let datos;
  before(() =>
    cy.fixture('miFixture').then((data) => {
      datos = data;
    })
  );
  beforeEach(() => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.get('#registertoggle').dblclick();
  });

  it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
    cy.get('#user').type(datos.data.username);
    cy.get('#pass').type(datos.data.password);
    cy.get('#submitForm').click();
    cy.get('#messageError').should('have.text', datos.data.errorMessage);
  });
});
