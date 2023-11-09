export class LoginPage {
  constructor() {
    this.iniciaSesion = '#registertoggle';
    this.user = '#user';
    this.pass = '#pass';
    this.loginButton = '#submitForm';
  }

  typeUser(user) {
    cy.get(this.user).type(user);
  }

  typePass(pass) {
    cy.get(this.pass).type(pass);
  }

  clickLogIn() {
    cy.get(this.loginButton).click();
  }
}
