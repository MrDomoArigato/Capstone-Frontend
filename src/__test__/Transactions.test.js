import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import Transactions, { TransactionDelete } from '../components/Transaction/Transactions';
import { getTransactions, deleteTransaction } from '../services/transaction';

jest.mock('../services/transaction', () => ({
  getTransactions: jest.fn(),
  deleteTransaction: jest.fn(),
}));

describe('Transactions Component', () => {
  const initialState = {
    Account: { current: { accountId: 123 } },
    Transactions: { current: [], set: jest.fn() },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls deleteTransaction and updates state when delete button is clicked', async () => {
    const transaction = {
      transactionId: 1,
      transactionDate: '2024-04-20',
      description: 'Test Transaction',
      transactionType: 'Credit',
      amount: 100,
    };
    const modifiedState = {
      Transactions: {
        current: [transaction],
        set: jest.fn(),
      },
    };

    render(
      <table>
        <tbody>
          <tr>
            <TransactionDelete transaction={transaction} state={modifiedState} />
          </tr>
        </tbody>
      </table>
    );

    window.confirm = jest.fn(() => true); // Mock confirm to always return true

    fireEvent.click(screen.getByText('Delete'));

    expect(window.confirm).toHaveBeenCalled();
    expect(deleteTransaction).toHaveBeenCalledWith(transaction);

    await waitFor(() => {
      expect(modifiedState.Transactions.set).toHaveBeenCalledWith([]);
    });
  });
});
