import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ExploreAllGenerators from '../ExploreAllGenerators';

describe('ExploreAllGenerators Component - Detailed Tests', () => {
    const renderComponent = () => render(
        <HelmetProvider>
            <MemoryRouter>
                <ExploreAllGenerators />
            </MemoryRouter>
        </HelmetProvider>
    );

    test('renders main headings correctly', () => {
        renderComponent();
        expect(screen.getByText('Infinite QR Possibilities')).toBeInTheDocument();
        expect(screen.getByText(/From high-conversion payment bridges/i)).toBeInTheDocument();
    });

    test('renders filter tabs natively and "All" is active by default', () => {
        renderComponent();
        const tabs = screen.getAllByRole('button');
        expect(tabs.length).toBeGreaterThan(0);

        const allTab = screen.getByRole('button', { name: 'All' });
        expect(allTab).toHaveClass('active');
    });

    test('filter tabs are intractable and update active state', () => {
        renderComponent();

        // Find a tab other than 'All', like 'Social Media' or 'Business & Marketing'
        // Since categories are dynamically generated, we grab all buttons
        const tabs = screen.getAllByRole('button');
        const nonAllTab = tabs.find(tab => tab.textContent !== 'All'); // E.g., 'Social Media'

        if (nonAllTab) {
            // Click the tab
            fireEvent.click(nonAllTab);

            // Check if it's now active
            expect(nonAllTab).toHaveClass('active');

            // Check if 'All' tab is no longer active
            const allTab = screen.getByRole('button', { name: 'All' });
            expect(allTab).not.toHaveClass('active');
        }
    });

    test('generators grid displays items with correct elements', () => {
        renderComponent();

        // At least some links should be rendered pointing to the generation tools
        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThan(0);

        // Each generator card should have a "Launch Tool" text
        const launchTexts = screen.getAllByText('Launch Tool');
        expect(launchTexts.length).toBeGreaterThan(0);
        expect(launchTexts.length).toBe(links.length);
    });

    test('filtering reduces or changes the number of displayed tools', () => {
        renderComponent();

        const allTab = screen.getByRole('button', { name: 'All' });
        fireEvent.click(allTab);

        const totalItems = screen.getAllByRole('link').length;

        const tabs = screen.getAllByRole('button');
        const specificCatTab = tabs.find(tab => tab.textContent !== 'All');

        if (specificCatTab) {
            fireEvent.click(specificCatTab);
            // It should theoretically show fewer items than "All", assuming we have more than 1 category
            const filteredItems = screen.getAllByRole('link').length;
            expect(filteredItems).toBeLessThanOrEqual(totalItems);
        }
    });
});
