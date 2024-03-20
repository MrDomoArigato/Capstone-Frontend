import { useEffect, useState } from 'react';
import { getAccounts } from '../../services/account';
import { Views } from '../../enums';

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

  return (<AccountList accounts={ accounts } state={ state } />);
}

function LoadTransPage(account, state){
  state.Account.set( account );
  state.View.set( Views.Account.Transactions );
}

function AccountCard({ account, state }) {
  return (
    <div className="col" onClick={() => LoadTransPage(account, state)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{account.accountName}</h5>
          <div>
            <p>Balance: ${account.balance.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountList({ accounts, state }) {
  return (
    <>
      <h4 style={{ marginTop: '40px'}}>Accounts</h4>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {accounts.map((account) => { return(
            <div key={account.accountId}>
              <AccountCard account={ account } state={ state }/>
            </div>
          );})}
        </div>
      </div>
    </>
  );
}


var testAccounts = [
  { accountId: 1, accountNumber: "1", accountName: "Account1", balance: 10 },
  { accountId: 2, accountNumber: "2", accountName: "Account2", balance: 20 },
  { accountId: 3, accountNumber: "3", accountName: "Account3", balance: 30 },
  { accountId: 4, accountNumber: "4", accountName: "Account4", balance: 40 },
  { accountId: 5, accountNumber: "5", accountName: "Account5", balance: 50 },
];

