const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, 'src', 'Components', 'Test');
const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('QRCodeLandingPage.test.jsx'));

for (const file of testFiles) {
    const filePath = path.join(testDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only enhance if it hasn't been enhanced yet
    if (content.includes('simulates user input and QR code generation')) continue;

    const compNameMatch = content.match(/import\s+([A-Za-z0-9_]+)\s+from/);
    if (!compNameMatch) continue;
    const compName = compNameMatch[1];
    
    // We need to make sure fireEvent is imported
    if (!content.includes('fireEvent')) {
        content = content.replace(/import\s+{\s*render\s*,\s*screen\s*}\s+from\s+['"]@testing-library\/react['"];/, "import { render, screen, fireEvent, waitFor } from '@testing-library/react';");
    }

    const detailedTests = `
    test('simulates user input and QR code generation', async () => {
        renderWithHelmet(<${compName} />);
        
        // Find all text-based inputs and type into them
        const inputs = screen.queryAllByRole('textbox');
        const urls = document.querySelectorAll('input[type="url"], input[type="email"], input[type="text"], input[type="tel"]');
        
        // Let's test interaction - enter a dummy value in the first input if any
        if (inputs.length > 0) {
            fireEvent.change(inputs[0], { target: { value: 'Test Value' } });
            expect(inputs[0].value).toBe('Test Value');
        } else if (urls.length > 0) {
            fireEvent.change(urls[0], { target: { value: 'https://example.com' } });
            expect(urls[0].value).toBe('https://example.com');
        }

        // Verify the QR code mock container is present
        const qrCodeContainer = screen.getByTestId('qr-code');
        expect(qrCodeContainer).toBeInTheDocument();
        
        // Check for interactive buttons like download completely blindly
        const buttons = screen.queryAllByRole('button');
        const downloadBtn = buttons.find(b => b.textContent.toLowerCase().includes('download'));
        if (downloadBtn && !downloadBtn.disabled) {
            fireEvent.click(downloadBtn);
            // This is just a click simulation to ensure no crashing on mock calls
        }
    });
`;

    // Insert before the last closing brace and parenthesis of the describe block
    const insertIndex = content.lastIndexOf('});');
    if (insertIndex !== -1) {
        content = content.slice(0, insertIndex) + detailedTests + content.slice(insertIndex);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Enhanced ' + file);
    }
}
