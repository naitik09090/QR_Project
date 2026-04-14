import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar_1";

describe("Navbar", () => {
    test("renders TheQRIFY logo", () => {
        render(<Navbar />);

        expect(
            screen.getByAltText("TheQRIFY Logo")
        ).toBeInTheDocument();
    });

    test("renders navigation links", () => {
        render(<Navbar />);

        expect(screen.getByText("Blog")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
        expect(screen.getByText("Terms")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
    });

    test("toggle button opens menu", () => {
        render(<Navbar />);

        const toggle = screen.getByLabelText("Toggle navigation");
        fireEvent.click(toggle);

        const menu = document.getElementById("collapsibleNavbar");
        expect(menu.classList.contains("show")).toBe(true);
    });
});
