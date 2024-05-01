import { useEffect, useState } from 'react';
import { AccountModal } from './AccountModal';
import { getAccounts, deleteAccount } from '../../services/account';
import { Views } from '../../enums';

export default function Accounts({ state }) {
  const [accounts, setAccounts] = useState([]);
  const getAllAccounts = async () => {
    const response = await getAccounts();

    if (!response) return;

    const { data: accountItems } = response;
    if (accountItems && accountItems.length) {
      setAccounts(accountItems);
      state.Account.set(accountItems[0])
    } else {
      document.getElementById('account-opts').disabled = true;
    }
  }

  useEffect(() => {
    getAllAccounts();
    // eslint-disable-next-line
  }, []);

  state["Accounts"] = {
    current: accounts,
    set: setAccounts
  }

  return (<AccountList state={state} />);
}

function LoadTransPage(account, state){
  state.Account.set( account );
  state.View.set( Views.Account.Transactions );
}

function AccountCard({ account, state }) {
  return (
    <div className="col"  data-testid="account-card" onClick={() => LoadTransPage(account, state)}>
      <div className="card account-card">
        <div className="card-body">
          <h5 className="card-title">{account.accountName}</h5>
          <div>
            <p>Balance: ${account.balance ? account.balance.toFixed(2) : 'N/A'}</p>
          </div>
          <AccountDelete account={account} state={state}/>
        </div>
      </div>
    </div>
  );
}

function AccountList({ state }) {
  return (
    <>
      <h5 style={{ paddingLeft: '125px', paddingTop: '30px' }}>Your Accounts</h5>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {state.Accounts.current.map((account, index) => { return(
            <div className="account-item" key={account.accountId} data-testid={`account-item-${index}`}>
              <AccountCard account={ account } state={ state }/>
            </div>
          );})}
          <AddAccountCard state={ state }/>
        </div>
      </div>
    </>
  );
}

function AddAccountCard({ state }) {
  return (
    <>
      <AccountModal state={ state } />
      <div className="col-md-3 mb-5">
        <div className="card account-card" data-bs-toggle="modal" data-bs-target="#account-modal" role="dialog">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title">Add Account</h5>
            <div>
              <div className='outline'>
                <div className='plus'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AccountDelete({ account, state }) {
  return (
    <button className="delete" onClick={(e) => {
      //const confirmation = window.confirm("Are you sure you want to delete this account?");
      //if (confirmation) {
        deleteAccount(account);
        //window.alert(`${account.accountName} was deleted`);
        const updated = state.Accounts.current.filter((a) => a.accountId !== account.accountId);
        state.Accounts.set(updated);
     // }
      e.stopPropagation();
    }}>Delete</button>
  );
}

