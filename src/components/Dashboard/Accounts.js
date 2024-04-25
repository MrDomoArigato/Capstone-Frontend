import { useEffect, useState } from 'react';
import { AccountModal, AddAccount } from './AccountModal';
import { getAccounts, deleteAccount } from '../../services/account';
import { Views } from '../../enums';
import App from '../../App';

export default function Accounts({ state }) {
  const [accounts, setAccounts] = useState([]);
  const getAllAccounts = async () => {
    const response = await getAccounts();

    if (!response) return;

    const { data: accountItems } = response;
    if (accountItems && accountItems.length) {
      setAccounts(accountItems);
    }
 
  }

  useEffect(() => {
    getAllAccounts();
  }, []);

  state["Accounts"] = {
    current: accounts,
    set: setAccounts
  }

  return (
    <>
  <AccountList state={ state } />
  <AccountModal account ={ null } />
  </>
  );
}

function LoadTransPage(account, state){
  state.Account.set( account );
  state.View.set( Views.Account.Transactions );
}

export function AccountCard({ account, state }) {
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


export function AccountList({ state }) {
  return (
    <>
      <h4 style={{ paddingLeft: '125px', paddingTop: '30px' }}>Your Accounts</h4>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {state.Accounts.current.map((account, index) => { return(
            <div className="account-item" key={account.accountId} data-testid={`account-item-${index}`}>
              <AccountCard account={account} state={ state}/>
            </div>
          );})}
          <AddAccountCard/>
        </div>
      </div>
    </>
  );
}

export function AddAccountCard() {
  return (
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
  );
}

export function AccountDelete({ account, state }) {
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

var testAccounts = [
  { accountId: 1, accountNumber: "1", accountName: "Account1", balance: 10 },
  { accountId: 2, accountNumber: "2", accountName: "Account2", balance: 20 },
  { accountId: 3, accountNumber: "3", accountName: "Account3", balance: 30 },
  { accountId: 4, accountNumber: "4", accountName: "Account4", balance: 40 },
  { accountId: 5, accountNumber: "5", accountName: "Account5", balance: 50 },
];

