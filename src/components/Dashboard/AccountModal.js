import { useState } from 'react';
import { createAccount } from '../../services/account';

function AccountForm({ state }) {
  const onSubmit = async (e) => {
    e.preventDefault();
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
      accountOwner: null,
      balance: balance,
    };
    const response = await createAccount(account);
    if(response.status === 200){
      const updatedAccounts = [response.data, ...state.Accounts.current];
      state.Accounts.set(updatedAccounts);
    }
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
        <label className="control-label requiredField" htmlFor="accountBalance">
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

export function AccountModal({ state }) {
    return (
        <div id="account-modal" className="modal fade" tabIndex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="accountModalLabel">Add Account2</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AccountForm state={ state } />
                    </div>
                </div>
            </div>
        </div>
    );
}

  

