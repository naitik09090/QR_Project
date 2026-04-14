import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import Footer from '../Footer';

describe('Footer Component', () => {
    test('renders logo and text correctly', () => {
        render(<Footer />);
        // Logo image exists
        const logoTarget = screen.getByAltText(/TheQRIFY Logo/i);
        expect(logoTarget).toBeInTheDocument();
        
        // Brand message exists
        expect(screen.getByText(/Empowering creators and businesses with fast, customizable/i)).toBeInTheDocument();
    });

    test('contains exact website links', () => {
        render(<Footer />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(2);
        
        // Ensure links go to theqrify.com
        expect(links[0]).toHaveAttribute('href', 'https://theqrify.com/');
    });
});
