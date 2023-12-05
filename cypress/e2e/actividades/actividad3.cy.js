describe('Actividad complementaria 3 XPATH', () => {
  // instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
  it('Actividad complementaria 3', () => {
    cy.visit('https://pushing-front.vercel.app/');
    cy.xpath("//span[contains(text(), 'Iniciá sesión')]").dblclick();
    cy.xpath('//div[@role="group"][1]//following-sibling::input').type(
      `pushingit`
    );
    cy.xpath('//input[@name="pass"]').type('123456!');
    cy.xpath('//button[contains(@class, "button")]').click();
    cy.xpath('//a[contains(text(), "To Do List")]').click();
    cy.xpath("//div[@class='css-hboir5']//child::input").type('tarea 1');
    cy.xpath("//div[@class='css-hboir5']//child::button").click();
    cy.xpath('//div[@class="css-vuy1kp"]//child::p').click();
  });
});
