describe("Navigation and Rendering", () => {
    // Test for navigating to the Static page and verifying its content
    it("should navigate to the Static page and display its content", () => {
        cy.visit("/"); // Visit the homepage
        cy.contains("Static Page").click(); // Click on the link to the Static Page
        cy.url().should("include", "/static"); // Check that the URL includes '/static'
        cy.contains("Static Page").should("be.visible"); // Verify that the Static Page title is visible
        cy.contains("How Static Generation Works").should("be.visible"); // Verify that the static content is visible
        cy.contains("Back to Home").click(); // Click on the 'Back to Home' link
        cy.url().should("eq", `${Cypress.config().baseUrl}/`); // Verify that the URL is back to the homepage
        cy.contains("Welcome to My Next.js App").should("be.visible"); // Ensure the homepage content is visible
    });

    // Test for navigating to the SSR page and verifying its content
    it("should navigate to the SSR page and display its content", () => {
        cy.visit("/"); // Visit the homepage
        cy.contains("Server-Side Rendered Page").click(); // Click on the link to the SSR Page
        cy.url().should("include", "/ssr"); // Check that the URL includes '/ssr'
        cy.contains("Welcome to the Server-Side Rendered (SSR) Page!").should(
            "be.visible"
        ); // Verify that the server-side content is visible
        cy.contains("Back to Home").click(); // Click on the 'Back to Home' link
        cy.url().should("eq", `${Cypress.config().baseUrl}/`); // Verify that the URL is back to the homepage
        cy.contains("Welcome to My Next.js App").should("be.visible"); // Ensure the homepage content is visible
    });

    // Test for navigating to the ISR page and verifying its content
    it("should navigate to the ISR page and display its content", () => {
        cy.visit("/"); // Visit the homepage
        cy.contains("Incremental Static Regeneration Page").click(); // Click on the link to the ISR Page
        cy.url().should("include", "/isr"); // Check that the URL includes '/isr'
        cy.contains(
            "Welcome to the Incremental Static Regeneration (ISR) Page!"
        ).should("be.visible"); // Verify that the ISR content is visible
        cy.contains("This page showcases ISR in action.").should("be.visible"); // Verify that the ISR revalidation message is visible
        cy.contains("This content was fetched on").should("be.visible"); // Check for updated content
        // Get the dynamically generated date and save it in a variable
        cy.get("#dynamic-date", { timeout: 10000 })
            .should("exist")
            .and("be.visible")
            .invoke("text")
            .then((initialText) => {
                cy.wait(12000); // Wait for 12 seconds (more than the revalidation interval)
                cy.reload(); // Reload the page
                cy.contains("This content was fetched on").should("be.visible"); // Check for updated content
                // Capture the dynamic content after reload and compare it to the initial one
                cy.get("#dynamic-date", { timeout: 10000 })
                    .should("be.visible")
                    .invoke("text")
                    .should("not.equal", initialText); // Ensure the content has changed
            });
        cy.contains("Back to Home").click(); // Click on the 'Back to Home' link
        cy.url().should("eq", `${Cypress.config().baseUrl}/`); // Verify that the URL is back to the homepage
        cy.contains("Welcome to My Next.js App").should("be.visible"); // Ensure the homepage content is visible
    });

    // Test for navigating to the random-string page, verifying its content, and navigating back
    it("should navigate to the random-string page and back", () => {
        cy.visit("/"); // Visit the homepage
        cy.intercept("GET", "/api/random-string").as("fetchRandomString");
        cy.contains("Random String Page").click(); // Click on the link to the Random String Page
        cy.wait(10); // Short wait to allow navigation to complete
        cy.url().should("include", "/random-string"); // Check that the URL includes '/random-string'
        cy.contains("This Page creates a random string").should("be.visible"); // Verify that the Random String Page title is visible
        //cy.contains("Loading...").should("be.visible"); // Verify that the loading message is visible
        cy.wait("@fetchRandomString", { timeout: 10000 }); // Wait for the API call to complete
        cy.get("p")
            .invoke("text")
            .should("match", /^[a-zA-Z0-9]+$/); // Verify that the random string matches the expected pattern
        cy.contains("Back to Home").click(); // Click on the 'Back to Home' link
        cy.url().should("eq", `${Cypress.config().baseUrl}/`); // Verify that the URL is back to the homepage
        cy.contains("Welcome to My Next.js App").should("be.visible"); // Ensure the homepage content is visible
    });
});
