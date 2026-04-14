import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// mock Google Analytics (VERY IMPORTANT)
vi.mock("./ga4", () => ({
    sendPageView: vi.fn(),
}));

describe("App Routing & Layout", () => {
    test("renders Navbar by default", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple logos may exist (navbar + footer)
        expect(
            screen.getAllByAltText("TheQRIFY Logo")[0]
        ).toBeInTheDocument();
    });

    test("hides Navbar when hideHeader=true", () => {
        render(
            <MemoryRouter initialEntries={["/?hideHeader=true"]}>
                <App />
            </MemoryRouter>
        );

        // Check that navbar is not rendered (no navigation element)
        expect(
            screen.queryByRole("navigation")
        ).not.toBeInTheDocument();
    });

    test("renders Home page on / route", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple website inputs exist (desktop + mobile)
        // Use a longer timeout because of lazy loading
        const inputs = await screen.findAllByPlaceholderText("https://theqrify.com/", {}, { timeout: 5000 });
        expect(inputs[0]).toBeInTheDocument();
    });

    test("renders Blog page on /blog route", async () => {
        render(
            <MemoryRouter initialEntries={["/blog"]}>
                <App />
            </MemoryRouter>
        );

        // Multiple "TheQRIFY Blog" headings exist (desktop + mobile)
        const headings = await screen.findAllByRole("heading", { name: /TheQRIFY Blog/i }, { timeout: 3000 });
        expect(headings[0]).toBeInTheDocument();
    });

    test("renders About page on /about route", async () => {
        render(
            <MemoryRouter initialEntries={["/about"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            await screen.findByText(/Our Story/i, {}, { timeout: 3000 })
        ).toBeInTheDocument();
    });

    test("renders Contact page on /contact route", async () => {
        render(
            <MemoryRouter initialEntries={["/contact"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            await screen.findByText(/Get In Touch/i, {}, { timeout: 3000 })
        ).toBeInTheDocument();
    });

    test("renders Privacy Policy page on /privacy_policy route", async () => {
        render(
            <MemoryRouter initialEntries={["/privacy_policy"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            await screen.findByRole("heading", { level: 1 }, { timeout: 5000 })
        ).toBeInTheDocument();
    }, 10000);

    test("renders Terms page on /terms route", async () => {
        render(
            <MemoryRouter initialEntries={["/terms"]}>
                <App />
            </MemoryRouter>
        );

        expect(
            await screen.findByRole("heading", { level: 1 }, { timeout: 5000 })
        ).toBeInTheDocument();
    }, 10000);
});
