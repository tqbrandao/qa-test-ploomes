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
    url: `${Cypress.config("baseUrlAPI")}${path}`, // baseUrl is prepend to URL
    headers: {
      "user-key": Cypress.config("userKey"),
    },
    // failOnStatusCode: false
  });
});

Cypress.Commands.add("postRequest", (path, body) => {
  return cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrlAPI")}${path}`, // baseUrl is prepend to URL
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
    url: `${Cypress.config("baseUrlAPI")}${path}`, // baseUrl is prepend to URL
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
    url: `${Cypress.config("baseUrlAPI")}${path}`, // baseUrl is prepend to URL
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
