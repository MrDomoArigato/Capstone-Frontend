import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import {AccountModal } from '../components/Dashboard/AccountModal'; 
import { createAccount } from '../services/account';
import '@testing-library/jest-dom/extend-expect'

jest.mock('../services/account', () => ({
  createAccount: jest.fn(),
}));

describe('AccountModal', () => {
    test('form fields contain entered values even after attempting to close modal', () => {
        render(<AccountModal state={{ Accounts: { current: [], set: jest.fn() } }} />);

        // Using regex to improve flexibility in matching label text
        const accountNameInput = screen.getByLabelText(/account name:/i);
        fireEvent.change(accountNameInput, { target: { value: 'Test Account' } });

        const balanceInput = screen.getByLabelText(/balance:/i);
        fireEvent.change(balanceInput, { target: { value: '100' } });

        // Find and click the close button
        const closeButton = screen.getByText('Close');
        fireEvent.click(closeButton);
        
        // Since the form does not reset, check that the form fields still contain the values entered
        expect(accountNameInput.value).toBe('Test Account');
        expect(balanceInput.value).toBe('100');
    });
});
