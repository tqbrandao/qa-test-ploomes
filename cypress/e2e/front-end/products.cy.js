// Testando funcionalidades extras

describe("Should perform CRUD operations on the products entity", () => {
  beforeEach(() => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
  });

  it("Should create a product", () => {
    cy.get("button").contains("Produtos").click();
    cy.get('a[id="filter-list"]').contains("Novo").click();
    cy.get("a").contains("Produto").click();
    cy.get('input[name="product_name"]')
      .type("Novo Produto", { force: true })
      .wait(1000)
      .tab()
      .tab()
      .type("Grupo Teste");
    cy.get(
      'li[class="suggestion-item new-li-reference dropdown-keyboard"]'
    ).click();
    cy.get('button[title="Submit"]').click();
    cy.get("button").contains("Salvar").click();
    cy.get('div[class="toast toast-success"]').should("contain", "Sucesso");
  });

  it("Should get all products", () => {
    cy.get("button", { timeout: 10000 }).contains("Produtos").click();
    cy.contains("div", "Novo Produto").should("be.visible");
  });

  it("Should delete a product", () => {
    cy.get("button").contains("Produtos").click();
    cy.get("div").contains("Grupo Teste").click();
    cy.get('a[class="button button-white"]').click();
    cy.get("a").contains("Confirmar").click();
  });
});
