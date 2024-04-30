import { TransactionModal } from './TransactionModal';
import React, { useState, useEffect } from 'react';
import { getTransactions, deleteTransaction } from '../../services/transaction';
import './Transaction.css';

function TransactionRow({ transaction }) {
  return (
    <>
      <td>{transaction.transactionDate}</td>
      <td>{transaction.description}</td>
      <td>{transaction.transactionType}</td>
      <td>${transaction.amount.toFixed(2)}</td>
    </>
  )
} 

export function TransactionDelete({ transaction, state }) {
  return (
    <td>
      <button className="delete" onClick={() => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
          deleteTransaction(transaction);
          const updated = state.Transactions.current.filter((t) => t.transactionId !== transaction.transactionId);
          state.Transactions.set(updated);
        }
      }}>  Delete</button>
    </td>
  );
}


function TransactionEdit({ transaction, state}) {
  return (
    <td>
      <td>
      <button className="edit" onClick={() => {
        if (window.confirm("Are you sure you want to delete this transaction?")) {
        }
      }}>  Edit</button>
    </td>
    </td>
  );
}

function TransactionTable({ state, onEdit }) {
  return (
    <>
    <h4 className="table-header">Recent Transactions</h4>
    <div className="table-container">
    <table className="table table-striped bg-info table-hover ">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {state.Transactions.current.map((transaction) => {
          return (
            <tr key={transaction.transactionId}>
              <TransactionRow transaction={transaction} />
              <TransactionDelete transaction={transaction} state={state}/>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  </>
  )
}



export default function Transactions({ state }) {
  const [transactions, setTransactions] = useState([]);
  
  state['Transactions'] = {
    current: transactions,
    set: setTransactions
  }

  const getAllTransactions = async () => {
    const response = await getTransactions(state.Account.current.accountId);

    if (!response) return;

    const { data: transactionItems } = response;
    if (transactionItems && transactionItems.length) {
      state.Transactions.set(transactionItems);
    }
  }
  
  useEffect(() => {
    getAllTransactions();
  // eslint-disable-next-line
  }, []);

  return (
    <>
      <TransactionModal state={ state } />
      <TransactionTable state={ state } />
    </>
  );
}