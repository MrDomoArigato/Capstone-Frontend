import { TransactionModal, AddTransaction } from './TransactionModal';
import React, { useState, useEffect } from 'react';
import { getTransactions } from '../../services/transaction';
import './Transaction.css';

function TransactionRow({ transaction }) {
  return (
    <>
      <td>{transaction.transactionDate}</td>
      <td>{transaction.description}</td>
      <td>{transaction.transactionType}</td>
      <td>${transaction.amount.toFixed(2)}</td>
      <td>
        {/*<button className ="edit" onClick={() => handleEditClick(transaction)}>Edit</button> */}
        <button className="delete" onClick={() => {}}>Delete</button>
      </td>
    </>
  )
} 

function TransactionTable({ transactions }) {
  return (
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
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.transactionId}>
              <TransactionRow transaction={transaction} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}



export default function Transactions({ state }) {
  const [transactions, setTransactions] = useState([]);
  
  const getAllTransactions = async () => {
    const response = await getTransactions(state.Account.current.accountId);

    if (!response) return;

    const { data: transactionItems } = response;
    if (transactionItems && transactionItems.length) {
      setTransactions(transactionItems);
    }
  }
  
  useEffect(() => {
    getAllTransactions();
  // eslint-disable-next-line
  }, []);


  return (
    <>
      <TransactionModal transaction={null} />
      <TransactionTable transactions={transactions} />
    </>
  );
}

// Define testtransactions outside the Transactions function
var testtransactions = [
  { transactionId: 0, accountId: 0, transactionDate: "1/1/24", description: "Description1", transactionType: "Purchase1", amount: 100.00, balance: 0 },
  { transactionId: 1, accountId: 0, transactionDate: "1/2/24", description: "Description2", transactionType: "Purchase2", amount: 20.50,  balance: 0 },
  { transactionId: 2, accountId: 0, transactionDate: "1/3/24", description: "Description3", transactionType: "Purchase3", amount: 50.48,  balance: 0 },
  { transactionId: 3, accountId: 0, transactionDate: "1/4/24", description: "Description4", transactionType: "Purchase4", amount: 516.30, balance: 0 },
  { transactionId: 4, accountId: 0, transactionDate: "1/5/24", description: "Description5", transactionType: "Purchase5", amount: 100.00, balance: 0 }
];