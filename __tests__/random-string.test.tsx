import { render, screen, waitFor } from "@testing-library/react";
import { http } from "msw";
import { setupServer } from "msw/node";
import RandomStringPage from "../app/random-string/page";

// Mock server for intercepting network requests
// const server = setupServer(
//     http.get("../app/api/random-string", () => {
//         return new Response(JSON.stringify({ randomString: "mockedString" }), {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//     })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// Mock the fetch function globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ randomString: 'mockedString' }),
  })
) as jest.Mock;

describe("RandomStringPage", () => {
    it("renders a random string from the API", async () => {
        render(<RandomStringPage />);

        // Check if the page is rendered
        expect(
            screen.getByText("This Page creates a random string")
        ).toBeInTheDocument();

        // Check if the page is in the loading state
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        // Wait for the mocked API response and check if the random string is rendered
        await waitFor(() =>
            expect(screen.getByText("mockedString")).toBeInTheDocument()
        );

        // Optionally, check if the fetch function was called as expected
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith("/api/random-string");
    });
});
