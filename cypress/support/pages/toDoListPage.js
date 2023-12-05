export class ToDoList {
  constructor() {
    this.allButton = '#all';
    this.completedButton = '#completed';
    this.acttiveButton = '#active';
    this.removeAllButton = '#removeAll';
  }
  allBtn() {
    cy.get(this.allButton).should('exist');
  }
  completedBtn() {
    cy.get(this.completedButton).should('exist');
  }
  activeBtn() {
    cy.get(this.acttiveButton).should('exist');
  }
  removeAllBtn() {
    cy.get(this.removeAllButton).should('exist');
  }
}
