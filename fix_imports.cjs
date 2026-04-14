const fs = require('fs');
const path = require('path');

const testDir = path.join(__dirname, 'src', 'Components', 'Test');
const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.test.jsx'));

for (const file of testFiles) {
    const filePath = path.join(testDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // If we use HelmetProvider but it's not imported
    if (content.includes('<HelmetProvider>') && !content.includes('import { HelmetProvider }') && !content.includes('import {HelmetProvider}')) {
        // Insert import right after the first import or at the very top
        content = "import { HelmetProvider } from 'react-helmet-async';\n" + content;
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Added HelmetProvider to ' + file);
    }
}
