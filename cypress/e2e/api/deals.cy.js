import dealData from "../../fixtures/dealData.json";

describe("Should test Ploomes's API deals section", () => {
  it("Should create a deal", () => {
    cy.postRequest("/Deals", dealData).then((res) => {
      Cypress.config("dealId", res.body.value[0].Id); // Checar como está escrita a Deal ID
      expect(res.status).to.equal(200);
      expect(res.body.value[0]).to.have.property("Id");
      expect(res.body.value[0].Title).not.to.be.empty;
    });
  });

  it("Should get all deals", () => {
    cy.getRequest("/Deals").then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value).length.to.be.gte(1);
      Cypress.config("dealsLength", res.body.value.length);
    });
  });

  it("Should patch a deal by it's ID", () => {
    cy.patchRequest(`/Deals(${Cypress.config("dealId")})`, {
      Name: "Pessoa atualizada",
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value[0].Title).to.equal("Novo Negócio");
    });
  });

  it("Should delete a deal by it's ID", () => {
    cy.deleteRequest(`/Deals(${Cypress.config("dealId")})`).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
});
