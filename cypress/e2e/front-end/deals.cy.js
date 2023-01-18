describe("Should perform CRUD operations on the deals entity", () => {
  beforeEach(() => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
  });

  it("Should create a deal", () => {
    cy.get("button").contains("Negócios").click();
    cy.get("a").contains("Novo negócio").click();
    cy.get('input[name="deal_title"]').type("Novo Negócio", { force: true });
    cy.get('input[name="deal_amount"]').type("2000");
    cy.get("button").contains("Salvar").click();
    cy.contains("div", "Novo Negócio").should("be.visible");
  });

  it("Should get all deals", () => {
    cy.get("button", { timeout: 10000 }).contains("Negócios").click();
    cy.contains("div", "Novo Negócio").should("be.visible");
  });

  it("Should update a deal", () => {
    cy.get("button").contains("Negócios").click();
    cy.get("a").contains("Novo Negócio").click({ force: true });
    cy.get("a").contains("Opções").click();
    cy.get("a").contains("Editar negócio").click();
    cy.get('input[name="deal_title"]').clear().type("Novo Negócio Atualizado");
    cy.get('input[name="deal_amount"]').clear().type("3000");
    cy.get("button").contains("Salvar").click();
    cy.contains("div", "Novo Negócio Atualizado").should("be.visible");
  });

  it("Should delete a deal", () => {
    cy.get("button").contains("Negócios").click();
    cy.get("a").contains("Novo Negócio Atualizado").click();
    cy.get("a").contains("Opções").click();
    cy.get("a").contains("Excluir negócio").click();
    cy.get("a").contains("Confirmar").click();
    cy.get('div[class="toast toast-success"]').should("contain", "Sucesso");
  });
});
