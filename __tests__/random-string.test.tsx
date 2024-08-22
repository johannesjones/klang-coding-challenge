import { render, screen, waitFor } from "@testing-library/react";
import RandomStringPage from "../app/random-string/page";

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
