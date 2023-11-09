export class ProductsPage {
  constructor() {
    this.closeModal = '#closeModal';
  }
  addToCart(product) {
    cy.get(`button[value="${product}"]`).click();
    cy.get(this.closeModal).click();
  }
}
