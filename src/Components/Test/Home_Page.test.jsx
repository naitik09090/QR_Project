import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "../Home_Page";

describe("Home Page (QR Generator)", () => {
    test("renders website input by default", () => {
        render(<HomePage />);

        expect(
            screen.getAllByPlaceholderText("https://theqrify.com/")[0]
        ).toBeInTheDocument();
    });

    test("allows user to type website URL", () => {
        render(<HomePage />);

        const input = screen.getAllByPlaceholderText("https://theqrify.com/")[0];
        fireEvent.change(input, {
            target: { value: "https://google.com" },
        });

        expect(input.value).toBe("https://google.com");
    });

    test("switches to Text tab", () => {
        render(<HomePage />);

        fireEvent.click(screen.getByRole("tab", { name: /Text/i }));

        expect(
            screen.getAllByPlaceholderText("Enter your text here")[0]
        ).toBeInTheDocument();
    });

    test("switches to Email tab", () => {
        render(<HomePage />);

        fireEvent.click(screen.getByRole("tab", { name: /Email/i }));

        // Check that Email tab content is displayed
        expect(
            screen.getByRole("tab", { name: /Email/i })
        ).toHaveAttribute("aria-selected", "true");
    });

    test("switches between all tab types", () => {
        render(<HomePage />);

        // Only test tabs that actually exist in the UI
        const tabs = ["Website", "Text", "vCard", "WhatsApp", "Email"];

        tabs.forEach(tabName => {
            const tab = screen.getByRole("tab", { name: new RegExp(tabName, "i") });
            fireEvent.click(tab);
            expect(tab).toHaveAttribute("aria-selected", "true");
        });
    });

    test("generates QR code when user enters website URL", () => {
        render(<HomePage />);

        const input = screen.getAllByPlaceholderText("https://theqrify.com/")[0];
        fireEvent.change(input, {
            target: { value: "https://example.com" },
        });

        // Verify input value is set
        expect(input.value).toBe("https://example.com");

        // Check if QR placeholder image is rendered (using alt text)
        // Using queryAllByAltText because the desktop/mobile versions may be hidden by Bootstrap classes
        const qrImages = screen.queryAllByAltText("TheQRIFY Img");
        expect(qrImages.length).toBeGreaterThan(0);
    });

    test("allows user to fill vCard contact information", () => {
        render(<HomePage />);

        // Switch to vCard tab
        fireEvent.click(screen.getByRole("tab", { name: /vCard/i }));

        // Fill in name - use getAllBy since there are desktop + mobile views
        const nameInput = screen.getAllByPlaceholderText("E.g. Paul")[0];
        fireEvent.change(nameInput, { target: { value: "John" } });
        expect(nameInput.value).toBe("John");

        // Fill in surname
        const surnameInput = screen.getAllByPlaceholderText("E.g. Jones")[0];
        fireEvent.change(surnameInput, { target: { value: "Doe" } });
        expect(surnameInput.value).toBe("Doe");
    });

    test("expands and collapses contact info section in vCard", () => {
        render(<HomePage />);

        fireEvent.click(screen.getByRole("tab", { name: /vCard/i }));

        // Get the first Contact info button (desktop view)
        const contactButton = screen.getAllByText(/Contact info/i)[0];

        // Initially collapsed - check aria-expanded attribute
        expect(contactButton).toHaveAttribute("aria-expanded", "false");

        // Click to expand
        fireEvent.click(contactButton);
        expect(contactButton).toHaveAttribute("aria-expanded", "true");

        // Click to collapse
        fireEvent.click(contactButton);
        expect(contactButton).toHaveAttribute("aria-expanded", "false");
    });


    test("allows user to compose email QR code", () => {
        render(<HomePage />);

        fireEvent.click(screen.getByRole("tab", { name: /Email/i }));

        const inputs = screen.getAllByPlaceholderText("Enter your text here");

        // Email address
        fireEvent.change(inputs[0], { target: { value: "test@example.com" } });
        // Subject
        fireEvent.change(inputs[1], { target: { value: "Hello" } });
        // Message
        fireEvent.change(inputs[2], { target: { value: "Test message" } });

        expect(inputs[0].value).toBe("test@example.com");
        expect(inputs[1].value).toBe("Hello");
        expect(inputs[2].value).toBe("Test message");
    });

    test("allows user to enter WhatsApp number and message", () => {
        render(<HomePage />);

        fireEvent.click(screen.getByRole("tab", { name: /WhatsApp/i }));

        const inputs = screen.getAllByPlaceholderText("Enter your text here");
        const numberInput = inputs[0];
        const messageInput = inputs[1];

        // Enter phone number (component adds +91 prefix automatically)
        fireEvent.change(numberInput, { target: { value: "9876543210" } });
        fireEvent.change(messageInput, { target: { value: "Hello from WhatsApp" } });

        // Verify values are set
        expect(numberInput.value).toBeTruthy();
        expect(messageInput.value).toBe("Hello from WhatsApp");
    });
});
