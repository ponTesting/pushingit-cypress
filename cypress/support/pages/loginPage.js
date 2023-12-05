export class LoginPage {
  constructor() {
    this.iniciaSesion = '#registertoggle';
    this.user = '#user';
    this.pass = '#pass';
    this.loginButton = '#submitForm';
  }

  typeUser(usuario) {
    cy.get(this.user).type(usuario);
  }

  typePass(contra) {
    cy.get(this.pass).type(contra);
  }

  clickLogIn() {
    cy.get(this.loginButton).click();
  }

  clickIniciaSesion() {
    cy.get(this.iniciaSesion).dblclick();
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }
}
