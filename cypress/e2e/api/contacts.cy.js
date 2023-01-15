import userData from "../../fixtures/userData.json";

describe("Should test Ploomes API", () => {
  it.skip("Criar usuario", () => {
    cy.postRequest("/Contacts", userData).then((res) => {
      cy.log(res);
      console.log(res);
    });
  });

  it("Get clientes", () => {
    cy.getRequest("/Contacts").then((res) => {
      cy.log(res);
      console.log(res.body);
    });
  });

  it("Patch usuario", () => {
    cy.patchRequest("/Contacts(400538400)", { Name: "Magribas" }).then(
      (res) => {
        console.log("Usuario modificado", res.body);
      }
    );
  });

  it.skip("Delete usuario", () => {
    cy.deleteRequest("/Contacts(400538365)", { Name: "Magribas" }).then(
      (res) => {
        console.log("Usuario modificado", res.body);
      }
    );
  });
});
