describe("Should perform CRUD operations on the clients entity", () => {
  beforeEach(() => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
  });

  it("Should create a client", () => {
    cy.get("button").contains("Clientes").click();
    cy.get("a").contains("Novo cliente").click();
    cy.get("a").contains("Pessoa").click();
    cy.get('input[name="contact_name"]').type("Pessoa Nova");
    cy.get("button").contains("Salvar").click({ force: true });
  });

  it("Should get all clients", () => {
    cy.get("button").contains("Clientes").click();
    cy.get("a").contains("Pessoas").click();
    cy.contains("div", "Pessoa Nova").should("be.visible");
  });

  it("Should update a client", () => {
    cy.get("button").contains("Clientes").click();
    cy.get("a").contains("Pessoas").click();
    cy.contains("div", "Pessoa Nova").click();
    cy.get("a").contains("Opções").click();
    cy.get("a").contains("Editar cliente").click();
    cy.get('input[name="contact_name"]').clear().type("Pessoa Atualizada");
    cy.get("button").contains("Salvar").click();
    cy.contains("div", "Pessoa Atualizada").should("be.visible");
  });

  it("Should delete a client", () => {
    cy.get("button").contains("Clientes").click();
    cy.get("a").contains("Pessoas").click();
    cy.contains("div", "Pessoa Atualizada").click();
    cy.get("a").contains("Opções").click();
    cy.get("a").contains("Excluir cliente").click();
    cy.get("a").contains("Confirmar").click();
    cy.get('div[class="toast-message"]').should("contain", "Cliente excluído");
  });
});
