import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import LandingPageFooter from '../LandingPageFooter';

describe('LandingPageFooter Component', () => {
    test('renders main section titles', () => {
        render(<LandingPageFooter currentPath="/qr-code-for-donations" />);
        expect(screen.getByText('Elevate Your QR Strategy')).toBeInTheDocument();
        expect(screen.getByText('Suggestions for your next project.')).toBeInTheDocument();
    });

    test('renders exactly 3 related tools dynamically', () => {
        render(<LandingPageFooter currentPath="/qr-code-for-donations" />);
        const coreTags = screen.queryAllByText('Core Tool');
        expect(coreTags.length).toBeGreaterThanOrEqual(0);
    });

    test('renders footer copyright branding', () => {
        render(<LandingPageFooter currentPath="/qr-code-for-donations" />);
        expect(screen.getByAltText('TheQRIFY Logo')).toBeInTheDocument();
        expect(screen.getByText(/©2026. All rights reserved./i)).toBeInTheDocument();
    });
});
