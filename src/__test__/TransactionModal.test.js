import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import { TransactionForm } from '../components/Transaction/TransactionModal';
import { toBeInTheDocument } from '@testing-library/jest-dom';


jest.mock('../services/transaction', () => ({
  getTransactions: jest.fn(() => Promise.resolve(mockTransactionTypes))
}));

describe('TransactionForm Component', () => {

  it('renders without crashing', () => {
    const state = { Account: { current: { accountId: 123 } } };
    const { getByLabelText, getByText } = render(<TransactionForm state={state} />);
    expect(getByLabelText(/Transaction Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
    expect(getByLabelText(/Transaction Amount/i)).toBeInTheDocument();
    expect(getByLabelText(/Transaction Type/i)).toBeInTheDocument();
    expect(getByText('Select One')).toBeInTheDocument();
  });

it('does not submit the form if any input field is left empty', async () => {
  const createTransactionMock = jest.fn().mockResolvedValueOnce({ data: {} });
  const state = { Account: { current: { accountId: 123 } } };
  const { getByLabelText, getByText } = render(
      <TransactionForm state={state} createTransaction={createTransactionMock} />
  );

  fireEvent.change(getByLabelText(/Transaction Date/i), { target: { value: '2024-04-20' } });
  fireEvent.change(getByLabelText(/Description/i), { target: { value: '' } });
  fireEvent.change(getByLabelText(/Transaction Type/i), { target: { value: 'Type 1' } });
  fireEvent.change(getByLabelText(/Transaction Amount/i), { target: { value: '1000' } });

  expect(getByLabelText(/Transaction Date/i).value).toBe('2024-04-20');
  expect(getByLabelText(/Description/i).value).toBe('');
  expect(getByLabelText(/Transaction Amount/i).value).toBe('1000');

  fireEvent.click(getByText('Save changes'));
  await waitFor(() => {
      expect(createTransactionMock).not.toHaveBeenCalled();
  });
});
});

/*
  it('submit the form if everything is filled', async () => {

    const createTransactionMock = jest.fn().mockResolvedValueOnce({ data: {} });
    const state = { Account: { current: { accountId: 123 } } };
    const { getByLabelText, getByText } = render(
        <TransactionForm state={state} createTransaction={createTransactionMock} />
    );
  
    fireEvent.change(getByLabelText(/Transaction Date/i), { target: { value: '2024-04-20' } });
    fireEvent.change(getByLabelText(/Description/i), { target: { value: 'description1' } });
    fireEvent.change(getByLabelText(/Transaction Type/i), { value: 'Type 1' });
    fireEvent.change(getByLabelText(/Transaction Amount/i), { target: { value: '1000' } });
  
    expect(getByLabelText(/Transaction Date/i).value).toBe('2024-04-20');
    expect(getByLabelText(/Description/i).value).toBe('description1');
    expect(getByLabelText(/Transaction Amount/i).value).toBe('1000');
    console.log("type test:", getByLabelText(/Transaction Type/i).value);
  
    fireEvent.click(getByText('Save changes'));
    await waitFor(() => {
      expect(createTransactionMock).toHaveBeenCalledTimes(1);
    });
  });

  it('updates state on transaction type selection', async() => {
    const state = { Account: { current: { accountId: 123 } } };
    const transactionTypes = [
      [
        { id: 1, description: 'Type 1' },
        { id: 2, description: 'Type 2' },
      ],
      [
        { id: 3, description: 'Type 3' },
        { id: 4, description: 'Type 4' },
      ],
    ];
   const {getByLabelText, getByText } = render(<TransactionForm state={state} transactionTypes={transactionTypes} />);
   const transactionTypeSelect = getByLabelText(/Transaction Type/i);
   expect(transactionTypeSelect).toBeDefined();

   const transactionTypeLabel = getByText('Transaction Type:');
   fireEvent.click(transactionTypeLabel);

   const selectOneOption = getByText('Select One');
  fireEvent.click(selectOneOption);

    await waitFor(() => {
    console.log("length after ", transactionTypeSelect.children.length+1)
  //  expect(transactionTypeSelect.children).toHaveLength(2);
    });*/
//});