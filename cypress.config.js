const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://api2.ploomes.com",
    baseUrlFront: "https://app10.ploomes.com",
    userKey:
      "46AEEA0F4E96BA0A6728F884D667D19A05444EDFB3BCADD57BEDF6D7966D4B6545A1D64DFB0F5EDD6C543B7C95E46DB2038B3E8B202C156B67022B30C0BC555B",
    contactId: null,
    dealId: null,
    email: "thalyssonteste@teste.com",
    password: "teste123",
  },
});
