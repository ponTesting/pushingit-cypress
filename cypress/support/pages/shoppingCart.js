export class ShoppingCart {
  constructor() {
    this.totalPrice = '#price';
  }
  verifyProduct(name, price) {
    cy.get(`p[name="${name}"]`).should('exist');
    cy.get(`p[name="${name}"]`).siblings(`p[name="${price}"]`).should('exist');
  }
  verifyTotalPrice(product1, product2) {
    cy.get(this.totalPrice).should('have.text', product1 + product2);
  }
}
