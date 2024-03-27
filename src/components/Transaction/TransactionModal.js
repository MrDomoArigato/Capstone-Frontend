import React, { useState } from 'react';
let globaltransaction = {};

function TransactionForm() {
  const onSubmit = (e) => {
    console.log(globaltransaction);
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
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="col-form-label">Description:</label>
        <input
          type="text"
          className="form-control"
          id="description"
          maxLength={descriptionMax}
          onInput={countCharacters}
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
        >
          <option value="none">Select One</option>

        </select>
      </div>
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="amount">
          Transaction Amount:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="number"
          className="form-control"
          id="transactionAmount"
          step="0.01"
          min="0"
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
  )
}

export function AddTransaction() {
  return (
    <div className="m-2 float-end"> {/* Adding margin for spacing */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transaction-modal" >
        Add Transaction
      </button>
    </div>
  );
}

export function setTransactionData({ transaction }){
  globaltransaction = transaction
  document.getElementById('transactionDate').value = transaction.transactionDate;
  document.getElementById('description').value = transaction.description;
  document.getElementById('transactionType').value = transaction.transactionType;
  document.getElementById('description').value = transaction.description;
  document.getElementById('amount').value = transaction.amount;
}

export function TransactionModal() { // addTransaction added
  return (
    <>
      <AddTransaction />
      <div id="transaction-modal" className="modal fade" tabIndex="-1" aria-labelledby="transactionModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="transactionModalLabel">Add Transaction</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <TransactionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}