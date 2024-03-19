import TransactionModal from './TransactionModal';
import { useState } from 'react';
import { Trans } from './TransactionModal';

// <button className ="edit" onClick="editRow(this)">Edit</button>
function LoadTransaction({transactions, setTransactions}){
  let runningBalance = 0;

  function deleteRow(transactionToDelete) {
    // Ask for confirmation before deleting
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (isConfirmed) {
      const updatedTransactions = transactions.filter(transaction => transaction.transactionId !== transactionToDelete.transactionId);
      setTransactions(updatedTransactions);
    }
  }
  return (
    <tbody className="table-group-divider">
    {transactions.map((transaction) => {
      runningBalance += transaction.Amount; // to keep track of Account Balance after each transaction is loaded into table
      return (
          <tr key={transaction.transactionId}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Type}</td>
            <td>${transaction.Amount.toFixed(2)}</td>
            <td>${runningBalance.toFixed(2)}</td> 
            <td>
              {/*<button className="edit" onClick={() => editRow(transaction)}>Edit</button>*/}
              <button className="delete" onClick={() => deleteRow(transaction)}>Delete</button>
      </td>
          </tr>
      );
    })}
    </tbody>
  );
}

function TransactionList({transactions}){
  //var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);
  const [transactionList, setTransactionList] = useState(transactions);

  return (
    <>
    <table className="table table-striped bg-info table-hover ">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Type</th>
        <th scope="col">Amount</th>
        <th scope="col">Available balance</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    {/*<LoadTransaction transactions={transactions} />*/}
    <LoadTransaction transactions={transactionList} setTransactions={setTransactionList} />
    </table>

    </>
  );
}

// Define testtransactions outside the Transactions function
var testtransactions = [
  { transactionId: 0, accountId: 0, Date: "1/1/24", Description: "Description1", Type: "Purchase1", Amount: +100.00, Balance: 10 },
  { transactionId: 1, accountId: 0, Date: "1/2/24", Description: "Description2", Type: "Purchase2", Amount: -20.50, Balance: 0 },
  { transactionId: 2, accountId: 0, Date: "1/3/24", Description: "Description3", Type: "Purchase3", Amount: -50.48, Balance: 0 },
  { transactionId: 3, accountId: 0, Date: "1/4/24", Description: "Description4", Type: "Purchase4", Amount: +516.30, Balance: 0 },
  { transactionId: 4, accountId: 0, Date: "1/5/24", Description: "Description5", Type: "Purchase5", Amount: -100.00, Balance: 0 }
];

export { testtransactions, TransactionList, Transactions, LoadTransaction };

export default function Transactions() {

  return (
    <>
     {/* <TransactionList transactions={transactions} setTransactions={setTransactions} />*/}
      <TransactionList transactions={testtransactions} />
      <TransactionModal />
      <Trans />
    </>
  );
}

