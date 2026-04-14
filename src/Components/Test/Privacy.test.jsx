import { render, screen } from "@testing-library/react";
import PrivacyPolicyTheQrify from "../Privacy";

describe("PrivacyPolicyTheQrify", () => {
    test("renders privacy policy heading", () => {
        render(<PrivacyPolicyTheQrify effectiveDate="2025-01-01" />);

        expect(
            screen.getByRole("heading", { name: /Privacy Policy/i })
        ).toBeInTheDocument();
    });

    test("shows effective date", () => {
        render(<PrivacyPolicyTheQrify effectiveDate="2025-01-01" />);

        expect(
            screen.getByText("2025-01-01")
        ).toBeInTheDocument();
    });

    test("renders Introduction section", () => {
        render(<PrivacyPolicyTheQrify />);

        expect(
            screen.getByText("Introduction")
        ).toBeInTheDocument();
    });

    test("renders contact email link", () => {
        render(<PrivacyPolicyTheQrify />);

        const email = screen.getAllByText("support@theqrify.com")[0];
        expect(email.closest("a")).toHaveAttribute(
            "href",
            "mailto:support@theqrify.com"
        );
    });

    test("renders official website link", () => {
        render(<PrivacyPolicyTheQrify />);

        const site = screen.getAllByText("https://theqrify.com")[0];
        expect(site).toHaveAttribute("href", "https://theqrify.com");
    });
});
