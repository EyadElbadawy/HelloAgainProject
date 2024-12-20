const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',   //for HTML reports
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://www.helloagain.com/en"
  },
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    overwrite: false,
    html: true,
    json: true,
  },
});
