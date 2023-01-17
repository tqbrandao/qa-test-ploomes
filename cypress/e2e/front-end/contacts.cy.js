describe("Should perform CRUD operations on the clients entity", () => {
  before(() => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
  });

  it("Should create a client", () => {
    cy.get("button").contains("Clientes").click();
    cy.get("a").contains("Novo cliente").click();
    cy.get("a").contains("Pessoa").click();
  });
});
