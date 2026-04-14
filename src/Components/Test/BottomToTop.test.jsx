import { render, screen, fireEvent } from "@testing-library/react";
import BackToTopButton from "../BottomToTop";

describe("BackToTopButton", () => {
    beforeEach(() => {
        // mock scrollTo
        window.scrollTo = vi.fn();
    });

    test("button is hidden initially", () => {
        render(<BackToTopButton />);

        const button = screen.getByLabelText("Back to top");
        expect(button).toHaveStyle({ display: "none" });
    });

    test("button becomes visible after scrolling", () => {
        render(<BackToTopButton />);

        // simulate scroll
        Object.defineProperty(document.documentElement, "scrollTop", {
            value: 400,
            writable: true,
        });

        fireEvent.scroll(window);

        const button = screen.getByLabelText("Back to top");
        expect(button).toHaveStyle({ display: "inline" });
    });

    test("clicking button scrolls to top", () => {
        render(<BackToTopButton />);

        Object.defineProperty(document.documentElement, "scrollTop", {
            value: 400,
            writable: true,
        });

        fireEvent.scroll(window);

        fireEvent.click(screen.getByLabelText("Back to top"));

        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });
});
