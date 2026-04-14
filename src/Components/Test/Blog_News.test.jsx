import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Blog_News from "../Blog_News";
import blogData from "../../data/blogData";

describe("Blog_News Page", () => {
    test("renders blog details page", () => {
        render(
            <MemoryRouter>
                <Blog_News />
            </MemoryRouter>
        );

        // Title appears in both main content (h1) and sidebar (h6)
        expect(
            screen.getAllByText(blogData[0].title)[0]
        ).toBeInTheDocument();
    });

    test("renders sidebar blog list", () => {
        render(
            <MemoryRouter>
                <Blog_News />
            </MemoryRouter>
        );

        blogData.forEach((item) => {
            const matches = screen.getAllByText(item.title);
            // Each title appears at least once (in sidebar)
            expect(matches.length).toBeGreaterThan(0);
        });
    });

    test("clicking sidebar card updates main content", () => {
        render(
            <MemoryRouter>
                <Blog_News />
            </MemoryRouter>
        );

        const secondBlog = blogData[1].title;
        const allMatches = screen.getAllByText(secondBlog);
        // Click the sidebar item (last occurrence)
        fireEvent.click(allMatches[allMatches.length - 1]);

        // Check that h1 heading exists with this title
        const headings = screen.getAllByRole("heading", { name: secondBlog });
        const h1Heading = headings.find(h => h.tagName === "H1");
        expect(h1Heading).toBeInTheDocument();
    });
});
