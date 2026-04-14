import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Registration from '../Registration';

const mockedNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockedNavigate
    };
});

describe('Registration Component In-Depth', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        global.fetch = vi.fn();
        global.alert = vi.fn();
    });

    test('renders all complex registration form inputs correctly', () => {
        render(<MemoryRouter><Registration /></MemoryRouter>);

        expect(screen.getByRole('heading', { level: 2, name: 'Register' })).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Your Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Your Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm Your Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Your First Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter Your Last Name')).toBeInTheDocument();
    });

    test('blocks API submission if passwords do not match (Frontend verification)', () => {
        render(<MemoryRouter><Registration /></MemoryRouter>);
        
        fireEvent.change(screen.getByPlaceholderText('Enter Your Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your First Name'), { target: { value: 'Test' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Last Name'), { target: { value: 'User' } });
        
        fireEvent.change(screen.getByPlaceholderText('Enter Your Password'), { target: { value: 'Pass12345' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm Your Password'), { target: { value: 'Pass12346' } });
        fireEvent.click(screen.getByRole('button', { name: 'Register' }));
        
        expect(global.alert).toHaveBeenCalledWith('Passwords do not match!');
        expect(global.fetch).not.toHaveBeenCalled();
    });

    test('blocks API submission if password length limit fails', () => {
        render(<MemoryRouter><Registration /></MemoryRouter>);
        
        fireEvent.change(screen.getByPlaceholderText('Enter Your Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your First Name'), { target: { value: 'Test' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Last Name'), { target: { value: 'User' } });

        fireEvent.change(screen.getByPlaceholderText('Enter Your Password'), { target: { value: 'short1' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm Your Password'), { target: { value: 'short1' } });
        fireEvent.click(screen.getByRole('button', { name: 'Register' }));

        expect(global.alert).toHaveBeenCalledWith('Password must be at least 8 characters long!');
        expect(global.fetch).not.toHaveBeenCalled();
    });

    test('submits valid registration data sequentially', async () => {
        render(<MemoryRouter><Registration /></MemoryRouter>);

        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: 'Success' })
        });

        fireEvent.change(screen.getByPlaceholderText('Enter Your Username'), { target: { value: 'newuser1' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'newuser1@test.com' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Password'), { target: { value: 'StrongPass123!' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm Your Password'), { target: { value: 'StrongPass123!' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your First Name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Enter Your Last Name'), { target: { value: 'Doe' } });

        fireEvent.click(screen.getByRole('button', { name: 'Register' }));

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledWith(
                'https://qrcodegen-e4bccbhbd7edh9bp.centralindia-01.azurewebsites.net/api/auth/register/',
                expect.objectContaining({
                    method: 'POST',
                    body: JSON.stringify({
                        username: 'newuser1',
                        email: 'newuser1@test.com',
                        password1: 'StrongPass123!',
                        password2: 'StrongPass123!',
                        first_name: 'John',
                        last_name: 'Doe'
                    })
                })
            );
        });

        expect(global.alert).toHaveBeenCalledWith('Registration successful! Redirecting to login...');
        expect(mockedNavigate).toHaveBeenCalledWith('/login');
    });
});
