// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getRequest", (path) => {
  return cy.request({
    method: "GET",
    url: path, // baseUrl is prepend to URL
    headers: {
      "user-key": Cypress.config("userKey"),
    },
    // failOnStatusCode: false
  });
});

Cypress.Commands.add("postRequest", (path, body) => {
  return cy.request({
    method: "POST",
    url: path, // baseUrl is prepend to URL
    headers: {
      "user-key": Cypress.config("userKey"),
    },
    body: body,
    // failOnStatusCode: false,
  });
});

Cypress.Commands.add("patchRequest", (path, body) => {
  return cy.request({
    method: "PATCH",
    url: path, // baseUrl is prepend to URL
    headers: {
      "user-key": Cypress.config("userKey"),
    },
    body: body,
    // failOnStatusCode: false,
  });
});

Cypress.Commands.add("deleteRequest", (path, body) => {
  return cy.request({
    method: "DELETE",
    url: path, // baseUrl is prepend to URL
    headers: {
      "user-key": Cypress.config("userKey"),
    },
    // failOnStatusCode: false,
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.visit(Cypress.config("baseUrlFront"));
  cy.get('input[id="email"]').type(email);
  cy.get('input[id="password"]').type(password);
  // cy.get("button").contains("Entrar").click();
  cy.get("#centerRender").click();
  cy.wait(15000);
});

Cypress.Commands.add("createContact", (contactData) => {
  cy.postRequest("/Contacts", contactData).then((res) => {
    Cypress.config("contactId", res.body.value[0].Id);
  });
});

Cypress.Commands.add("createDeal", (dealData) => {
  cy.postRequest("/Deals", dealData).then((res) => {
    Cypress.config("dealId", res.body.value[0].Id);
  });
});
