import React, { useState } from 'react';
import { createTransaction } from '../../services/transaction';
import './Transaction.css';
import { Modal } from 'bootstrap';

function TransactionForm({ state }) {
  const [transaction, setTransactionData] = useState({
    accountId: null,
    transactionDate: null,
    description: '',
    transactionType: 'Select One',
    amount: 0,
  });
  
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // get value of input field based off name property in form
    setTransactionData(prevState => ({ // updates state and sets transaction data
      ...prevState,
      [name]: value,
      accountId: state.Account.current.accountId
    }));
  }
  
  const onSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};
    if (!transaction.transactionDate) {
      errors.transactionDate = <small>Transaction Date is required.</small>;
    }
    if (transaction.transactionType === 'Select One') {
      errors.transactionType = <small>Transaction Type is required.</small>;
    }
    if (!transaction.amount) {
      errors.amount = <small>Transaction Amount is required.</small>;
    }


    // Update validation errors state
    setValidationErrors(errors);

    // If there are validation errors, prevent form submission
    if (Object.keys(errors).length === 0) {

    console.log(transaction);
    try {
      const response = await createTransaction(transaction);
      if (response) {
        // Update transactions list in state
        const updatedTransactions = [response.data, ...state.Transactions.current];
        state.Transactions.set(updatedTransactions);
        setTransactionData({
          accountId: null,
          transactionDate: null,
          description: '',
          transactionType: 'Select One',
          amount: 0,
        });
        document.getElementById("transactionForm").reset();
        document.getElementById("transaction-modal").classList.remove("show");
        Array.from(document.getElementsByClassName('modal-backdrop')).forEach((e) => {
          e.remove();
        });
        
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
    } else {
      console.log('Form submission prevented due to validation errors.');
    }
  }

  const descriptionMax = 80;
  function countCharacters() {
    var text = document.getElementById('description').value;
    document.getElementById('counter').textContent = descriptionMax - text.length;
  }

  return (
    <form onSubmit={onSubmit} id="transactionForm">
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="transactionDate">
          Transaction Date:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="date"
          id="transactionDate"
          name="transactionDate"
          onChange={handleChange}
        />
        <div className="text-danger">{validationErrors.transactionDate}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="col-form-label">Description:</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          maxLength={descriptionMax}
          onInput={countCharacters}
          onChange={handleChange}
        />
        <p><small>Remaining characters: <span id="counter">{descriptionMax}</span></small></p>
      </div>
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="Description">
          Transaction Type:
          <span className="asteriskField">*</span>
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="transactionType"
          name="transactionType"
          onChange={handleChange}
        >
          <option value="none">Select One</option>
          {state.TransactionTypes.current.map((typeList, index) => (
            <optgroup key={index} label={typeList.length > 0 ? typeList[0].description : `Group ${index + 1}`}>
              {typeList.map(type => (
                <option key={type.id} value={type.id}>{type.description}</option> 
              ))}
            </optgroup>
          ))}
        </select>
        <div className="text-danger">{validationErrors.transactionType}</div>
      </div>
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="amount">
          Transaction Amount:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          step="0.01"
          onChange={handleChange}
        />
        <div className="text-danger">{validationErrors.amount}</div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success">Save changes</button>
      </div>
    </form>
  )
}

export function AddTransaction() {
  return (
    <div className="m-2 float-end"> {/* Adding margin for spacing */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transaction-modal">
        Add Transaction
      </button>
    </div>
  );
}

export function setTransactionData({ transaction }){
  document.getElementById('transactionDate').value = transaction.transactionDate;
  document.getElementById('description').value = transaction.description;
  document.getElementById('transactionType').value = transaction.transactionType;
  document.getElementById('amount').value = transaction.amount;
}

export function TransactionModal({ state }) { // addTransaction added
  return (
    <>
      <AddTransaction  />
      
      <div id="transaction-modal" className="modal fade" tabIndex="-1" aria-labelledby="transactionModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="transactionModalLabel">Add Transaction</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <TransactionForm state ={state} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}