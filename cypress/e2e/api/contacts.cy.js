import contactData from "../../fixtures/contactData.json";

describe("Should test Ploomes's API contacts section", () => {
  it("Should create an user", () => {
    cy.postRequest("/Contacts", contactData).then((res) => {
      Cypress.config("userId", res.body.value[0].Id);
      expect(res.status).to.equal(200);
      expect(res.body.value[0]).to.have.property("Id");
      expect(res.body.value[0].Name).not.to.be.empty;
    });
  });

  it("Should get all users", () => {
    cy.getRequest("/Contacts").then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value).length.to.be.gte(1);
      Cypress.config("usersLength", res.body.value.length);
      console.log(res.body);
    });
  });

  it("Should patch an user by it's ID", () => {
    cy.patchRequest(`/Contacts(${Cypress.config("userId")})`, {
      Name: "Pessoa atualizada",
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value[0].Name).to.equal("Pessoa atualizada");
    });
  });

  it("Should delete an user by it's ID", () => {
    cy.deleteRequest(`/Contacts(${Cypress.config("userId")})`).then((res) => {
      expect(res.status).to.equal(200);

      // O metodo delete da API nao retorna um body, nao sendo possivel fazer assertivas com o mesmo
    });
  });
});
