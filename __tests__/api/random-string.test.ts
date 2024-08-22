

import { GET } from "../../app/api/random-string/route"; // Adjust path if necessary

describe("GET /api/random-string", () => {
    it("returns a random string", async () => {
        const response = await GET();

        // Simulate NextResponse.json to test the response
        const jsonResponse = await response.json();

        expect(response.status).toBe(200);
        expect(jsonResponse).toHaveProperty("randomString");
        expect(typeof jsonResponse.randomString).toBe("string");
        expect(jsonResponse.randomString).toMatch(/^[a-zA-Z0-9]+$/); // Adjust based on the length of the random string
    });
});
