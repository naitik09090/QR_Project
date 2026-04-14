const fs = require('fs');
const path = require('path');

const targetFiles = [
    'ExtendedLandingPages.test.jsx'
];

const testDir = path.join(__dirname, 'src', 'Components', 'Test');

for (const file of targetFiles) {
    const filePath = path.join(testDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file}, not found.`);
        continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract imports of components
    // Looks like: import Name from '../Folder/Name';
    const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]\.\.\/([^'"]+)['"];/g;
    const components = [];
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        components.push({
            name: match[1],
            path: match[2]
        });
    }

    console.log(`Found ${components.length} components in ${file}`);

    for (const comp of components) {
        // Extract the test block for this component
        // test('Name renders correctly', () => { ... });
        const testRegex = new RegExp(`test\\('${comp.name} renders correctly', \\(\\) => \\{[\\s\\S]*?\\}\\);`, 'm');
        const testMatch = content.match(testRegex);

        let testBody = '';
        if (testMatch) {
            testBody = testMatch[0];

            // let's enhance the test body a bit to make it "in detail"
            // We can add a generic test for "Generate QR Code" or similar if we want, but for now we'll just extract it as is and add a download button test.

            const detailedTests = `
    ${testBody}

    test('${comp.name} has common elements', () => {
        renderWithHelmet(<${comp.name} />);
        const qrCodeMock = screen.getByTestId('qr-code');
        expect(qrCodeMock).toBeInTheDocument();
    });`;

            const newContent = `import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ${comp.name} from '../${comp.path}';

// Mocking qrcode.react
vi.mock('qrcode.react', () => ({
    QRCodeSVG: () => <div data-testid="qr-code" />
}));

// Provide a mock for jsdom elements like download link
beforeAll(() => {
    // Suppress jsdom errors if unhandled
});

const renderWithHelmet = (ui) => {
    return render(
        <HelmetProvider>
            {ui}
        </HelmetProvider>
    );
};

describe('${comp.name} Details', () => {
${detailedTests}
});
`;

            const compTestPath = path.join(testDir, `${comp.name}.test.jsx`);
            fs.writeFileSync(compTestPath, newContent, 'utf8');
            console.log(`Created ${compTestPath}`);
        } else {
            console.log(`Could not find test block for ${comp.name}`);
        }
    }

    // We can delete the original big test file to avoid duplicates, but we will leave it or rename it.
    // fs.renameSync(filePath, filePath + '.bak');
}
