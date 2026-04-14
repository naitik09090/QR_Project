const fs = require('fs');
const path = require('path');

const dirs = [
    'Business & Marketing',
    'Files & Tools',
    'Payment_Qr_Pages',
    'Qr_Landing_Pages',
    'Restaurant & Hospitality',
    'Social Media'
];
const basePath = 'c:\\Users\\Granthik\\Desktop\\QRIFY_Main\\QRTY_Code\\QRCodeFE\\src\\Components';
let modifiedFiles = 0;

dirs.forEach(dir => {
    const dirPath = path.join(basePath, dir);
    if (!fs.existsSync(dirPath)) return;

    fs.readdirSync(dirPath).forEach(file => {
        if (!file.endsWith('.jsx')) return;
        const fullPath = path.join(dirPath, file);
        let content = fs.readFileSync(fullPath, 'utf8');

        const regex = /const\s+isAllFieldsFilled\s*=\s*(.*?);/;
        const match = content.match(regex);

        if (match && !match[1].includes('trim')) {
            const oldValue = match[1];
            // Split by &&
            const vars = oldValue.split('&&').map(v => v.trim());
            // Create new condition with .trim() !== ''
            const newCondition = vars.map(v => `${v}.trim() !== ''`).join(' && ');
            
            content = content.replace(match[0], `const isAllFieldsFilled = ${newCondition};`);
            fs.writeFileSync(fullPath, content, 'utf8');
            modifiedFiles++;
            console.log(`Updated trim() condition in ${file}`);
        }
    });
});

console.log(`Total files updated with trim(): ${modifiedFiles}`);
