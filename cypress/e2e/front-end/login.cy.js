describe("Should login into Ploomes plataform", () => {
  it("Should login", () => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
    cy.url().should("be.equal", "https://app10.ploomes.com/");
    cy.get('[class="side-wrapper"]').should("be.visible");
  });
});
