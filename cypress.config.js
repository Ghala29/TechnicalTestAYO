const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'dp56od',
  allowCypressEnv: false,
  video: true,

  e2e: {
    baseUrl : 'https://ayo.co.id/',
    specPattern : "cypress/e2e/booking.cy.js",
    supportFile : false,
    viewportWidth: 1280,
    viewportHeight: 720, 
    setupNodeEvents(on, config) {
    },
  },
});
