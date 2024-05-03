import { render, screen } from '@testing-library/react';
import React from 'react';
import Accounts from '../components/Dashboard/Accounts';
import { getAccounts } from '../services/account';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../services/account', () => ({
  getAccounts: jest.fn(),
}));

describe("Accounts Component Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correct account list from fetched data', async () => {
    const testAccounts = [
      { accountId: 1, accountName: 'Test Account 1', balance: 100 },
      { accountId: 2, accountName: 'Test Account 2', balance: 200 }
    ];
    getAccounts.mockResolvedValue({ data: testAccounts });

    const state = {
      Accounts: {
        current: [],
        set: jest.fn()
      },
      Account: {
        set: jest.fn()
      },
      View: {
        set: jest.fn()
      }
    };

    render(<Accounts state={state} />);
    expect(await screen.findByText('Test Account 1')).toBeInTheDocument();
    expect(screen.getByText('Test Account 2')).toBeInTheDocument();
  });

  test('handles errors when fetching accounts fails', async () => {
    getAccounts.mockResolvedValue(null);  // Simulate failure in fetching accounts

    const state = {
      Accounts: {
        current: [],
        set: jest.fn()
      },
      Account: {
        set: jest.fn()
      },
      View: {
        set: jest.fn()
      }
    };

    render(<Accounts state={state} />);
    await screen.findByText('Your Accounts'); // Ensure base component is rendered

    // Optionally, check for the absence of account cards if no data is loaded
    expect(screen.queryByTestId('account-card')).toBeNull();
  });
});








