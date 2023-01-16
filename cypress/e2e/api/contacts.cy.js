import contactData from "../../fixtures/contactData.json";

describe("Should test Ploomes's API contacts section", () => {
  before(() => {
    // Hook para inserção de massa de dados, permitindo que cada teste possa ser executado individualmente.
    cy.createContact(contactData);
  });

  it("Should create an contact", () => {
    cy.postRequest("/Contacts", contactData).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value[0]).to.have.property("Id");
      expect(res.body.value[0].Name).not.to.be.empty;
    });
  });

  it("Should get all contacts", () => {
    cy.getRequest("/Contacts").then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value).length.to.be.gte(1);
    });
  });

  it("Should patch a contact by it's ID", () => {
    cy.patchRequest(`/Contacts(${Cypress.config("contactId")})`, {
      Name: "Pessoa atualizada",
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.value[0].Name).to.equal("Pessoa atualizada");
    });
  });

  it("Should delete a contact by it's ID", () => {
    cy.deleteRequest(`/Contacts(${Cypress.config("contactId")})`).then(
      (res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.empty;
      }
    );
  });
});
