import dealData from "../../fixtures/dealData.json";

describe("Should test Ploomes's API deals section", () => {
  it("Should create a deal", () => {
    cy.postRequest("/Deals", dealData).then((res) => {
      Cypress.config("userId", res.body.value[0].Id); // Checar como está escrita a Deal ID
      expect(res.status).to.equal(200);
      expect(res.body.value[0]).to.have.property("Id");
      expect(res.body.value[0].Name).not.to.be.empty;
    });
  });

  it("Should get all deals", () => {
    cy.getRequest("/Deals").then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value).length.to.be.gte(1);
      Cypress.config("usersLength", res.body.value.length);
      console.log(res.body);
    });
  });

  it("Should patch a deal by it's ID", () => {
    cy.patchRequest(`/Deals(${Cypress.config("userId")})`, {
      Name: "Pessoa atualizada",
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value[0].Name).to.equal("Pessoa atualizada");
    });
  });

  it("Should delete a deal by it's ID", () => {
    cy.deleteRequest(`/Deals(${Cypress.config("userId")})`).then((res) => {
      expect(res.status).to.equal(200);

      // O metodo delete da API nao retorna um body, nao sendo possivel fazer assertivas com o mesmo
    });
  });
});
