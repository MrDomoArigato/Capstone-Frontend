import TransactionModal from './TransactionModal';
import React, { useState } from 'react';
import { Trans } from './TransactionModal';

function LoadTransaction({transactions, deleteTransaction, handleEdit, showModal, setShowModal, editFormData}){
  let runningBalance = 0;
  function deleteRow(transactionToDelete) {
    // Ask for confirmation before deleting
    const isConfirmed = window.confirm("Are you sure you want to delete this transaction?");
    if (isConfirmed) {
      deleteTransaction(transactionToDelete);
    }
  }
  const handleEditClick = (transactions) => {
    handleEdit(transactions);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    //setEditTransaction(null);
  };

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
          {/*<button className ="edit" onClick={() => handleEditClick(transaction)}>Edit</button>*/}
              <button className="delete" onClick={() => deleteRow(transaction)}>Delete</button>
      </td>
          </tr>
      );
    })}
    {showModal && (
        <TransactionModal
          handleModalOpen={() => setShowModal(true)} 
          setShowModal={setShowModal}
          showModal={showModal} 
          addTransaction={handleEdit}
          formData={editFormData}
          handleClose={handleCloseModal}
        />
      )}

    </tbody>
  );
}

function TransactionList({transactions, deleteTransaction, handleEdit, handleModalOpen, editFormData}){
  //var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);
  const [transactionList, setTransactionList] = useState(transactions);
  const [showModal, setShowModal] = useState(false);
  
  const handleAddTransactionClick = () => {
    handleModalOpen(); // Call handleModalOpen when the button is clicked
  };

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
    <LoadTransaction transactions={transactions} 
      setTransactions={setTransactionList}
      deleteTransaction={deleteTransaction}
      handleEdit={handleEdit} 
      showModal={showModal} 
      setShowModal={setShowModal} 
      editFormData={editFormData}
    />
    </table>
    <div className="mb-3"> {/* Adding margin for spacing */}
        <button type="button" className="btn btn-primary" onClick={handleAddTransactionClick}>
          Add Transaction
        </button>
      </div>
    </>
  );
}

// Define testtransactions outside the Transactions function
var testtransactions = [
  { transactionId: 0, accountId: 0, Date: "1/1/24", Description: "Description1", Type: "Purchase1", Amount: +100.00, Balance: 0 },
  { transactionId: 1, accountId: 0, Date: "1/2/24", Description: "Description2", Type: "Purchase2", Amount: -20.50, Balance: 0 },
  { transactionId: 2, accountId: 0, Date: "1/3/24", Description: "Description3", Type: "Purchase3", Amount: -50.48, Balance: 0 },
  { transactionId: 3, accountId: 0, Date: "1/4/24", Description: "Description4", Type: "Purchase4", Amount: +516.30, Balance: 0 },
  { transactionId: 4, accountId: 0, Date: "1/5/24", Description: "Description5", Type: "Purchase5", Amount: -100.00, Balance: 0 }
];

export { testtransactions, TransactionList, Transactions, LoadTransaction };

export default function Transactions() {
  const [showModal, setShowModal] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [transactions, setTransactions] = React.useState(testtransactions);


  const addTransaction = (formData) => {
    const newTransaction = {
      transactionId: transactions.length,
      accountId: 0,
      Date: formData.transactionDate,
      Description: formData.description,
      Type: formData.transactionType,
      Amount: parseFloat(formData.transactionAmount),
      Balance: 0
    };

    setTransactions([...transactions, newTransaction]); // Update testtransactions with the new transaction
  };

  const deleteTransaction = (transactionToDelete) => {
    // Filter out the transaction to delete
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.transactionId !== transactionToDelete.transactionId
    );

    // Update transactions array
    setTransactions(updatedTransactions);
  };

  const handleEdit = (transaction) => {
    console.log("Transaction data:", transaction);
    setEditFormData(transaction);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };


  return (
    <>
     {/* <TransactionList transactions={transactions} setTransactions={setTransactions} />
      <TransactionList transactions={testtransactions} />
  <TransactionModal />*/}
    <TransactionList 
      transactions={transactions} 
      deleteTransaction={deleteTransaction}
      handleEdit={handleEdit} 
      handleModalOpen={() => setShowModal(true)} 
      editFormData={editFormData}
    />
    <TransactionModal 
      handleModalOpen={() => setShowModal(true)} 
      setShowModal={setShowModal}
      showModal={showModal} 
      handleCloseModal={handleModalClose} 
      addTransaction={addTransaction}
    />

    <Trans />
    </>
  );
}