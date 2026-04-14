import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockedNavigate
    };
});

describe('Login Component Validation Set', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        global.fetch = vi.fn();
        global.alert = vi.fn();
    });

    test('renders login form inputs completely', () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Login');
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    test('handles form submission logic and router navigation successfully', async () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ user: { name: 'TestUser' }, token: 'mockToken' })
        });

        const usernameInput = screen.getByPlaceholderText('Username');
        const passwordInput = screen.getByPlaceholderText('Password');
        const loginBtn = screen.getByRole('button', { name: 'Login' });

        fireEvent.change(usernameInput, { target: { value: 'testuser' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        fireEvent.click(loginBtn);

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                'https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/auth/login/',
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify({ username: 'testuser', password: 'password123' })
                })
            );
        });

        expect(mockedNavigate).toHaveBeenCalledWith('/');
    });

    test('catches failed logins gracefully without crashing', async () => {
        render(<MemoryRouter><Login /></MemoryRouter>);
        
        global.fetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ detail: 'Invalid credentials' })
        });

        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'wronguser' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpass' } });
        fireEvent.click(screen.getByRole('button', { name: 'Login' }));

        await waitFor(() => {
            expect(global.alert).toHaveBeenCalledWith('Invalid credentials');
        });
    });
});
