import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "http://localhost:3000", // Set your base URL here
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Pattern for spec files
        supportFile: false, // Support file path
        //defaultCommandTimeout: 15000,
    },
});
