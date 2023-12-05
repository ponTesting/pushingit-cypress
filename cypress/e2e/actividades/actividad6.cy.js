// import { LoginPage } from '../support/pages/loginPage.js';
import { LoginPage } from '../../support/pages/loginPage.js';
import { ToDoList } from '../../support/pages/toDoListPage.js';
// import { ToDoList } from '../support/pages/toDoListPage.js';
describe('Actividad complementaria 6', () => {
  const loginPage = new LoginPage();
  const toDoList = new ToDoList();

  beforeEach('Actividad complementaria 5', () => {
    cy.visit('');
    loginPage.clickIniciaSesion();
    loginPage.typeUser(Cypress.env().user);
    loginPage.typePass(Cypress.env().pass);
    loginPage.clickLogin();
    cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`, {
      timeout: 7000,
    }).should('exist');
    cy.get('#todolistlink').click();
  });

  it('deberia verificar que los botones existen', () => {
    toDoList.allBtn();
    toDoList.completedBtn();
    toDoList.removeAllBtn();
    toDoList.activeBtn();
  });
});
