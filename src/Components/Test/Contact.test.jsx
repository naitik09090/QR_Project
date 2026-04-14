import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "../Contact";

// mock analytics
vi.mock("../../gaEvents", () => ({
    sendEvent: vi.fn(),
}));

describe("ContactPage", () => {
    test("renders contact page heading", () => {
        render(<ContactPage />);

        expect(
            screen.getByText("Get In Touch")
        ).toBeInTheDocument();
    });

    test("allows user to fill and submit form with valid data", () => {
        render(<ContactPage />);

        fireEvent.change(screen.getByPlaceholderText("Enter Your Name"), {
            target: { value: "John Doe" },
        });

        fireEvent.change(screen.getByPlaceholderText("Support@theqrify.com"), {
            target: { value: "john@test.com" },
        });

        fireEvent.change(
            screen.getByPlaceholderText("I want to hire you quickly"),
            { target: { value: "Hiring" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Write here your message"),
            { target: { value: "Hello there" } }
        );

        fireEvent.click(screen.getByText("Send Message"));

        expect(
            screen.getByText("Message sent — thanks!")
        ).toBeInTheDocument();
    });

    test("shows validation error for invalid email format", () => {
        render(<ContactPage />);

        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");

        // Fill in valid data for other fields
        fireEvent.change(screen.getByPlaceholderText("Enter Your Name"), {
            target: { value: "John Doe" },
        });

        // Enter invalid email
        fireEvent.change(emailInput, {
            target: { value: "invalid-email" },
        });

        fireEvent.change(
            screen.getByPlaceholderText("I want to hire you quickly"),
            { target: { value: "Test Subject" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Write here your message"),
            { target: { value: "Test message" } }
        );

        // Try to submit
        fireEvent.click(screen.getByText("Send Message"));

        // Check that email input is invalid (HTML5 validation)
        expect(emailInput).toBeInvalid();
    });

    test("shows validation error for missing @ in email", () => {
        render(<ContactPage />);

        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");

        fireEvent.change(emailInput, {
            target: { value: "notanemail.com" },
        });

        // HTML5 validation should mark it as invalid
        expect(emailInput).toBeInvalid();
    });

    test("prevents submission with empty required fields", () => {
        render(<ContactPage />);

        const nameInput = screen.getByPlaceholderText("Enter Your Name");
        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");
        const subjectInput = screen.getByPlaceholderText("I want to hire you quickly");
        const messageInput = screen.getByPlaceholderText("Write here your message");

        // Try to submit empty form
        fireEvent.click(screen.getByText("Send Message"));

        // All required fields should be invalid
        expect(nameInput).toBeInvalid();
        expect(emailInput).toBeInvalid();
        expect(subjectInput).toBeInvalid();
        expect(messageInput).toBeInvalid();

        // Success message should not appear
        expect(
            screen.queryByText("Message sent — thanks!")
        ).not.toBeInTheDocument();
    });

    test("accepts valid email formats", () => {
        render(<ContactPage />);

        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");

        const validEmails = [
            "test@example.com",
            "user.name@example.co.uk",
            "user+tag@example.com",
            "user_name@example-domain.com",
        ];

        validEmails.forEach((email) => {
            fireEvent.change(emailInput, {
                target: { value: email },
            });
            expect(emailInput).toBeValid();
        });
    });

    test("rejects invalid email formats", () => {
        render(<ContactPage />);

        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");

        const invalidEmails = [
            "notanemail",
            "@nodomain.com",
            "spaces in@email.com",
            "double@@domain.com",
        ];

        invalidEmails.forEach((email) => {
            fireEvent.change(emailInput, {
                target: { value: email },
            });
            expect(emailInput).toBeInvalid();
        });
    });

    test("captures and logs form data on submission", () => {
        // Spy on console.log to verify form data
        const consoleLogSpy = vi.spyOn(console, 'log');

        render(<ContactPage />);

        // Fill out the form with specific data
        fireEvent.change(screen.getByPlaceholderText("Enter Your Name"), {
            target: { value: "Jane Smith" },
        });

        fireEvent.change(screen.getByPlaceholderText("Support@theqrify.com"), {
            target: { value: "jane.smith@example.com" },
        });

        fireEvent.change(
            screen.getByPlaceholderText("I want to hire you quickly"),
            { target: { value: "Partnership Inquiry" } }
        );

        fireEvent.change(
            screen.getByPlaceholderText("Write here your message"),
            { target: { value: "I would like to discuss a partnership opportunity." } }
        );

        // Submit the form
        fireEvent.click(screen.getByText("Send Message"));

        // Verify console.log was called with the correct data
        expect(consoleLogSpy).toHaveBeenCalledWith(
            "send contact:",
            {
                name: "Jane Smith",
                email: "jane.smith@example.com",
                subject: "Partnership Inquiry",
                message: "I would like to discuss a partnership opportunity.",
            }
        );

        // Clean up spy
        consoleLogSpy.mockRestore();
    });

    test("clears form fields after successful submission", () => {
        render(<ContactPage />);

        const nameInput = screen.getByPlaceholderText("Enter Your Name");
        const emailInput = screen.getByPlaceholderText("Support@theqrify.com");
        const subjectInput = screen.getByPlaceholderText("I want to hire you quickly");
        const messageInput = screen.getByPlaceholderText("Write here your message");

        // Fill out the form
        fireEvent.change(nameInput, {
            target: { value: "Test User" },
        });

        fireEvent.change(emailInput, {
            target: { value: "test@example.com" },
        });

        fireEvent.change(subjectInput, {
            target: { value: "Test Subject" },
        });

        fireEvent.change(messageInput, {
            target: { value: "Test message content" },
        });

        // Submit the form
        fireEvent.click(screen.getByText("Send Message"));

        // Verify all fields are cleared
        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
        expect(subjectInput.value).toBe("");
        expect(messageInput.value).toBe("");
    });
});
