import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import {AccountModal } from '../components/Dashboard/AccountModal'; 
import { createAccount } from '../services/account';
import '@testing-library/jest-dom/extend-expect'
import { Button } from 'bootstrap';

jest.mock('../services/account', () => ({
  createAccount: jest.fn(),
}));

  describe('AccountModal', () => {
    test('submitting the form calls createAccount with the correct data', () => {

      render(<AccountModal />);

      const accountName = 'Test Account';
      const balance = '100';

      fireEvent.change(screen.getByLabelText(/Account Name/i), { target: { value: accountName } });
      fireEvent.change(screen.getByLabelText(/Balance/i), { target: { value: balance } });
      fireEvent.submit(screen.getByTestId('addAccountForm'));
  
      expect(createAccount).toHaveBeenCalledTimes(1);
      expect(createAccount).toHaveBeenCalledWith({
        accountName: 'Test Account',
        accountOwner: 'OwnerNameTest',
        balance: 100,
      });
    });
  
    test('input validation prevents form submission with invalid data', () => {
      render(<AccountModal />);
  
      fireEvent.change(screen.getByLabelText(/Account Name/i), { target: { value: '' } });
      fireEvent.change(screen.getByLabelText(/Balance/i), { target: { value: '' } });
      fireEvent.submit(screen.getByTestId('addAccountForm'));
  
      expect(createAccount).not.toHaveBeenCalled();
    });

    test('form retains values on modal close', () => {
      // Render the AccountModal component
      render(<AccountModal />);

      const accountNameInput = screen.getByLabelText(/Account Name/i);
      const balanceInput = screen.getByLabelText(/Balance/i);

      fireEvent.change(accountNameInput, { target: { value: 'Test Account' } });
      fireEvent.change(balanceInput, { target: { value: '100' } });
      fireEvent.click(screen.getByLabelText('Close'));
    
      expect(accountNameInput).toHaveValue('Test Account');
      expect(balanceInput).toHaveValue(100);
    });

  });