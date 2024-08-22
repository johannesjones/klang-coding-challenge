import { render, screen, waitFor } from "@testing-library/react";
import ISRPage from "../app/isr/page";

// jest.mock("../app/isr-page/page", () => ({
//     __esModule: true,
//     default: async () => {
//         return function MockedISRPage() {
//             return (
//                 <div>
//                     <h1>
//                         Incremental Static Regeneration Page
//                     </h1>
//                     <p>This is some mocked content fetched for ISR.</p>
//                     <p>This page will be revalidated every 10 seconds.</p>
//                 </div>
//             );
//         };
//     },
// }));

describe("ISRPage", () => {
    it("renders the ISR content", async () => {
        render(<ISRPage />);

        await waitFor(() => {
            expect(
                screen.getByText("Incremental Static Regeneration Page")
            ).toBeInTheDocument();
            expect(
                screen.getByText("This is some mocked content fetched for ISR.")
            ).toBeInTheDocument();
            expect(
                screen.getByText(
                    "This page will be revalidated every 10 seconds."
                )
            ).toBeInTheDocument();
        });
    });
});
