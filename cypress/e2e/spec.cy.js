import { LoginPage } from '../support/pages/loginPage';
import { HomePage } from '../support/pages/homePage';
import { ProductsPage } from '../support/pages/productsPage';
import { ShoppingCart } from '../support/pages/shoppingCart';
describe('PRE ENTREGA', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCart = new ShoppingCart();
  let datos;

  before(() => {
    cy.fixture('dataEntry').then((data) => {
      datos = data;
    });
  });

  beforeEach('Login', () => {
    cy.visit('');
    cy.get('#registertoggle').dblclick();
    loginPage.typeUser(Cypress.env().user);
    loginPage.typePass(Cypress.env().pass);
    loginPage.clickLogIn();
    homePage.enterOnlineShop();
  });

  it('Agregar 2 productos y verificar nombre y precio', () => {
    productsPage.addToCart(datos.product1.name);
    productsPage.addToCart(datos.product2.name);
    cy.get('#goShoppingCart').click();
    shoppingCart.verifyProduct(datos.product1.name, datos.product1.price);
    shoppingCart.verifyProduct(datos.product2.name, datos.product2.price);
    cy.contains('Show total price').click();
    shoppingCart.verifyTotalPrice(datos.product2.price, datos.product1.price);
  });
});
