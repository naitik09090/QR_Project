import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Blog from "../Blog";

// mock useNavigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => ({
    ...await vi.importActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Blog Page", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    test("renders Blog heading", () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );

        // Multiple "QRIFY Blog" headings (desktop + mobile)
        expect(
            screen.getAllByRole("heading", { name: "TheQRIFY Blog" })[0]
        ).toBeInTheDocument();
    });

    test("renders blog cards", () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );

        const learnMoreTexts = screen.getAllByText(/Learn more/i);
        expect(learnMoreTexts.length).toBeGreaterThan(0);
    });

    test("pagination next button works", () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );

        const nextButton = screen.getByLabelText("Next");
        fireEvent.click(nextButton);

        const page2Button = screen.getByRole("button", { name: "Page 2" });
        expect(page2Button.closest(".page-item")).toHaveClass("active");
    });

    test("clicking blog card navigates to blog-news", () => {
        render(
            <MemoryRouter>
                <Blog />
            </MemoryRouter>
        );

        const card = screen.getAllByText(/Learn more/i)[0];
        fireEvent.click(card);

        expect(mockNavigate).toHaveBeenCalledWith(
            "/blog-news",
            expect.any(Object)
        );
    });
});
