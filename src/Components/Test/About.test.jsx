import { render, screen } from "@testing-library/react";
import AboutTheQrify from "../About";

describe("AboutTheQrify Page", () => {
    test("renders About page heading", () => {
        render(<AboutTheQrify />);

        // Check for the link text "TheQrify" since the heading contains a link
        expect(
            screen.getByText("TheQrify")
        ).toBeInTheDocument();
    });

    test("renders Our Story section", () => {
        render(<AboutTheQrify />);

        expect(
            screen.getByText("Our Story")
        ).toBeInTheDocument();
    });

    test("renders Why TheQrify section", () => {
        render(<AboutTheQrify />);

        expect(
            screen.getByText("Why TheQrify?")
        ).toBeInTheDocument();
    });

    test("renders contact email link", () => {
        render(<AboutTheQrify />);

        const emailLink = screen.getByText("support@theqrify.com");
        expect(emailLink).toBeInTheDocument();
        expect(emailLink.closest("a")).toHaveAttribute(
            "href",
            "mailto:support@theqrify.com"
        );
    });

    test("renders official website link", () => {
        render(<AboutTheQrify />);

        const siteLink = screen.getAllByText("theqrify.com")[0];
        expect(siteLink.closest("a")).toHaveAttribute(
            "href",
            "https://theqrify.com"
        );
    });
});
