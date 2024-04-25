import React, { useState } from 'react';
import { createAccount } from '../../services/account';

let account = {};

export function AccountForm() {
  const onSubmit = (e) => {
    
  /*var account = {
    "accountName": document.getElementById('accountName').value, 
    "accountOwner": "OwnerNameTest",
    "balance": parseInt(document.getElementById('accountBalance').value),
  }
  createAccount(account);*/

    const accountName = document.getElementById('accountName').value;
    const balance = parseInt(document.getElementById('accountBalance').value);

    if (!accountName || isNaN(balance)) {
      return; 
    }
    const account = {
      accountName: accountName,
      accountOwner: "OwnerNameTest",
      balance: balance,
    };
    createAccount(account);
}
  return (
    <form onSubmit={onSubmit} id="addAccountForm" data-testid="addAccountForm">
      <div className="mb-3">
        <label className="control-label requiredField" htmlFor="accountName">
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
        <label className="control-label requiredField" htmlFor="accountBalance">//Balance
          Balance:
          <span className="asteriskField">*</span>
        </label>
        <input
          type="number"
          className="form-control"
          id="accountBalance"
          step="0.01"
          min="0"
        />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-success">Save changes</button>
      </div>
    </form>
  )
}

export function setAccountData({ account }){
    document.getElementById('accountOwner').value = account.accountOwner;
    document.getElementById('accountName').value = account.accountName;
    document.getElementById('accountBalance').value = account.balance;
  }

/*export function AccountModal({ account }) {
    return (
      <>
        <div id="account-modal" className="modal fade" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="accountModalLabel">Add Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <AccountForm/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }*/

export function AccountModal({ account }) {
    return (
        <div className="modal fade" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="accountModalLabel">Add Account2</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AccountForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

  

