const fs = require('fs');
const path = require('path');

const comps = [
  { name: '404_Page', path: '../404_Page' },
  { name: 'CountryPage', path: '../CountryPage' },
  { name: 'ExploreAllGenerators', path: '../ExploreAllGenerators' },
  { name: 'Footer', path: '../Footer' },
  { name: 'LandingPageFooter', path: '../LandingPageFooter' },
  { name: 'Login', path: '../Login' },
  { name: 'Registration', path: '../Registration' }
];

const testDir = path.join(__dirname, 'src', 'Components', 'Test');

for (const comp of comps) {
  const content = `import { render } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ${comp.name === '404_Page' ? 'NotFoundPage' : comp.name} from '${comp.path}';

describe('${comp.name} Component', () => {
    test('renders without crashing', () => {
        const { container } = render(
            <HelmetProvider>
                <MemoryRouter>
                    <${comp.name === '404_Page' ? 'NotFoundPage' : comp.name} />
                </MemoryRouter>
            </HelmetProvider>
        );
        expect(container).toBeTruthy();
    });
});
`;
  
  fs.writeFileSync(path.join(testDir, comp.name + '.test.jsx'), content, 'utf8');
  console.log('Created ' + comp.name);
}
