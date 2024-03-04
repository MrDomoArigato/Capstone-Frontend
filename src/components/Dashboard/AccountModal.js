import React, { useState } from 'react';
let account = {};

function AccountForm() {
  const onSubmit = (e) => {
    console.log(account);
  }
  return (
    <form onSubmit={onSubmit} id="addAccountForm">
      <div className="mb-3">
        <label htmlFor="AccountOwner" className="control-label requiredField">Full Name:</label>
        <span className="asteriskField">*</span>
        <input
          type="text"
          className="form-control"
          id="accountOwner"
        />
      </div>
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="AccountName">
          Account Name:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="accountName"
        />
      </div>
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="Balance">
          Balance:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="number"
          className="form-control"
          id="balance"
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

export function setAccountData({ account }){
    document.getElementById('accountOwner').value = account.accountOwner;
    document.getElementById('accountName').value = account.accountName;
    document.getElementById('balance').value = account.balance;
  }

export function AccountModal({ account }) {
    return (
      <>
        <div id="account-modal" className="modal fade" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="accountModalLabel">Add Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <AccountForm account={ account } />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }