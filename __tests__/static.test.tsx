import { render, screen } from "@testing-library/react";
import StaticPage from "../app/staticp/page";

describe("StaticPage", () => {
    it("renders the static content", () => {
        render(<StaticPage />);

        expect(screen.getByText("Static Page")).toBeInTheDocument();
        expect(
            screen.getByText("How Static Generation Works")
        ).toBeInTheDocument();
    });
});
