export class HomePage {
  constructor() {
    this.toDo = '#todolistlink';
    this.onlineShop = '#onlineshoplink';
    this.alerts = '#alertslink';
    this.waits = '#waitstlink';
    this.formUtils = '#formutilslink';
    this.fileUpload = '#fileuploadlink';
  }

  enterToDo() {
    cy.get(this.toDo, { timeout: 10000 }).click();
  }

  enterOnlineShop() {
    cy.get(this.onlineShop).click();
  }
}
