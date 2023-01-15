describe("Should login into Ploomes plataform", () => {
  it("Should create an user", () => {
    cy.login(Cypress.config("email"), Cypress.config("password"));
  });
});
