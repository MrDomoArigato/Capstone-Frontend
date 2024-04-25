import Transactions from '../components/Transaction/Transactions';
import { getTransactions } from '../services/transaction';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { deleteTransaction } from '../services/transaction';
import { TransactionDelete } from '../components/Transaction/Transactions';

jest.mock('../services/transaction', () => ({
  getTransactions: jest.fn(),
  deleteTransaction: jest.fn(),
}));

describe('Transactions Component', () => {
  afterEach(() => {
    getTransactions.mockClear();
  });

  it('renders transaction table with data', async () => {
    const mockTransactions = [
      {
        transactionId: 1,
        transactionDate: '2024-04-20',
        description: 'Test Transaction1',
        transactionType: 'Credit1',
        amount: 100,
      },
      {
        transactionId: 2,
        transactionDate: '2024-05-20',
        description: 'Test Transaction2',
        transactionType: 'Credit2',
        amount: 200,
      },
    ];

   getTransactions.mockResolvedValueOnce({ data: mockTransactions });

    const state = {
      Account: { current: { accountId: 123 } },
      Transactions: { current: [], set: jest.fn() },
    };

    const { getByText } = render(<Transactions state={state} />);

    await waitFor(() => {
      expect(getTransactions).toHaveBeenCalledTimes(1);
      expect(getTransactions).toHaveBeenCalledWith(123);
      expect( getByText('Test Transaction1')).toBeInTheDocument();
      expect(getByText('Credit1')).toBeInTheDocument();
      expect(getByText('$100.00')).toBeInTheDocument();
    });

    const { data: transactions } = await getTransactions.mock.results[0].value;
    console.log('Transaction:', transactions);
    expect(transactions.length).toBe(2);
  });

  it('calls deleteTransaction and updates state when delete button is clicked', async () => {
    const transaction = {
      transactionId: 1,
      transactionDate: '2024-04-20',
      description: 'Test Transaction',
      transactionType: 'Credit',
      amount: 100,
    };
    const state = {
      Transactions: {
        current: [transaction],
        set: jest.fn(),
      },
    };

    const { getByText } = render(<TransactionDelete transaction={transaction} state={state} />);

    window.confirm = jest.fn(() => true);

    fireEvent.click(getByText('Delete'));

    expect(window.confirm).toHaveBeenCalled();
    expect(deleteTransaction).toHaveBeenCalledWith(transaction);
    
    await waitFor(() => {
      expect(state.Transactions.set).toHaveBeenCalledWith([]);
    });
  });
});