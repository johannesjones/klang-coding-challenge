import { render, screen, waitFor } from "@testing-library/react";
import SSRPage from "../app/ssr/page";
import ReactDOMServer from "react-dom/server";

// Mock the getData function
jest.mock("../app/ssr-page/page", () => ({
    ...jest.requireActual("../app/ssr-page/page"),
    getData: jest.fn(() =>
        Promise.resolve({
            body: "This is some mocked content fetched on the server side.",
        })
    ),
}));

describe("SSRPage", () => {
    it("renders the server-side content", async () => {
        const ui = ReactDOMServer.renderToString(<SSRPage />);
        const container = document.createElement("div");
        document.body.appendChild(container);
        container.innerHTML = ReactDOMServer.renderToString(ui);

        // Hydrate the React Component and DOM node rendered on the server-side.
        render(ui, { hydrate: true, container });

        // Wait for the component to finish rendering
        await waitFor(() => {
            expect(
                screen.getByText("Server-Side Rendered Page")
            ).toBeInTheDocument();
            expect(
                screen.getByText(
                    "This is some mocked content fetched on the server side."
                )
            ).toBeInTheDocument();
        });
    });

    it("contains a link back to the home page", async () => {
        const ui = <SSRPage />;
        render(ui);

        // Wait for the component to finish rendering
        await waitFor(() => {
            expect(screen.getByText("Back to Home")).toBeInTheDocument();
            expect(
                screen.getByText("Back to Home").closest("a")
            ).toHaveAttribute("href", "/");
        });
    });
});
