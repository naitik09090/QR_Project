import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import NotFoundPage from '../404_Page';

describe('404_Page Component', () => {
    test('renders 404 text and description', () => {
        render(<NotFoundPage />);
        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('Page Not Found')).toBeInTheDocument();
        expect(screen.getByText(/Sorry, we couldn’t find the page you’re looking for./i)).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(<NotFoundPage />);
        const homeLink = screen.getByRole('link', { name: /Return Home/i });
        const contactLink = screen.getByRole('link', { name: /Contact Support/i });

        expect(homeLink).toHaveAttribute('href', '/');
        expect(contactLink).toHaveAttribute('href', '/contact');
    });
});
