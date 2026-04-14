import { render, screen } from "@testing-library/react";
import TermsConditionsTheQrify from "../Terms";

describe("Terms & Conditions Page", () => {
    test("renders terms heading", () => {
        render(<TermsConditionsTheQrify effectiveDate="2025-01-01" />);

        expect(
            screen.getByRole('heading', { name: /Terms & Conditions/i })
        ).toBeInTheDocument();
    });

    test("shows effective date", () => {
        render(<TermsConditionsTheQrify effectiveDate="2025-01-01" />);

        expect(
            screen.getByText("2025-01-01")
        ).toBeInTheDocument();
    });

    test("renders Acceptance of Terms section", () => {
        render(<TermsConditionsTheQrify />);

        expect(
            screen.getByText("1. Acceptance of Terms")
        ).toBeInTheDocument();
    });

    test("renders contact email link", () => {
        render(<TermsConditionsTheQrify />);

        const email = screen.getByText("support@theqrify.com");
        expect(email.closest("a")).toHaveAttribute(
            "href",
            "mailto:support@theqrify.com"
        );
    });
});
