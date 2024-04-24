import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import React from 'react';
import Accounts, { AccountList, AccountCard, AddAccountCard, AccountDelete } from '../components/Dashboard/Accounts';
import { Views } from '../enums';
import { getAccounts, deleteAccount} from '../services/account';

jest.mock('../services/account', () => ({
  getAccounts: jest.fn(),
  deleteAccount: jest.fn(),
}));

describe("AccountList page", ()=>{
  test('renders correct account list', () => {
     const state = { 
      Accounts: {
        current: [
          { accountId: 1, accountName: 'Test Account 1', balance: 100 },
          { accountId: 2, accountName: 'Test Account 2', balance: 200 },
          {accountId: 3, accountName: 'Test Account 3', balance: 300},
        ],
        set: jest.fn() 
      }
    };

    render(<AccountList state={state} />);

      state.Accounts.current.forEach((account, index) => {
      const accountNameElement = screen.getByText(account.accountName);
      const balanceElement = screen.getByTestId(`balance-${index}`);
      const accountItems = screen.getAllByTestId(/^account-item-/); 

      expect(accountItems).toHaveLength(state.Accounts.current.length);
      expect(accountNameElement).toHaveTextContent(account.accountName);
      expect(balanceElement).toHaveTextContent(`Balance: ${account.balance}`); 
  
    });
  });

  test('clicking on account card loads transaction page', () => {
    const account = { accountId: 1, accountName: 'Test Account 1', balance: 100 };

    const state = {
      Account: { set: jest.fn() },
      View: { set: jest.fn() }
    };

    const { getByText } = render(<AccountCard account={account} state={state} />);
    fireEvent.click(getByText('Test Account 1'));

    expect(state.Account.set).toHaveBeenCalledWith(account);
    expect(state.View.set).toHaveBeenCalledWith(Views.Account.Transactions);
  });

  test('clicking on Add Account card opens add account modal', () => {
    render(<AddAccountCard />);

      const addAccountTitle = screen.getByText('Add Account');
      const actualTitle = addAccountTitle.textContent;
      const modal = screen.getByRole('dialog');

      fireEvent.click(screen.getByText('Add Account'));
      expect(actualTitle).toBe('Add Account');
      expect(modal).toBeInTheDocument();

  });
  
    test('renders correct account list using getAccounts', async () => {
      const testAccounts = [
        { accountId: 1, accountName: 'Test Account 1', balance: 100 },
        { accountId: 2, accountName: 'Test Account 2', balance: 200 },
      ];
      getAccounts.mockResolvedValue({ data: testAccounts });
      render(<Accounts state={{}} />);
  
      expect(await screen.findAllByTestId('account-card')).toHaveLength(2);
      expect(screen.getByText('Add Account')).toBeInTheDocument();
    });

    test('clicking on delete button deletes the account', () => {
      const account = { accountId: 1, accountName: 'Test Account 1', balance: 100 };
      const state = { Accounts: { current: [account], set: jest.fn() } };
  
      render(<AccountDelete account={account} state={state} />);
      fireEvent.click(screen.getByText('Delete'));
      const updatedAccountArray = state.Accounts.current.filter(a => a.accountId !== account.accountId);

      expect(deleteAccount).toHaveBeenCalledWith(account);
      expect(state.Accounts.set).toHaveBeenCalledWith(updatedAccountArray);
});
});








