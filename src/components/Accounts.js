import { useState } from 'react';
import { Views } from '../enums';
import {Transactions} from './Transactions'; // Assuming Transactions component is defined and exported correctly

/*export default function Accounts(){
  const [view, setView] = useState(null);
    return(
        <>
     <AccountList accounts={testaccounts} />
     <AccountsCard setView={setView} testaccounts={testaccounts} />
        </>
    )
}

function LoadAccount({accounts, setAccounts}){

    function deleteRow(accountToDelete) {
      // Ask for confirmation before deleting
      const isConfirmed = window.confirm("Are you sure you want to delete this Account?");
      if (isConfirmed) {
        const updatedAccounts = accounts.filter(accounts => accounts.accountId !== accountToDelete.accountId);
        setAccounts(updatedAccounts);
      }
    }
    return (
      <tbody className="table-group-divider">
      {accounts.map((account) => {
        return (
            <tr key={account.accountId}>
                <td>{account.accountNumber}</td>
              <td>{account.Name}</td>
              <td>{account.Balance}</td>
             
      
            </tr>
        );
      })}
      </tbody>
    );
  }

function AccountList({accounts}){ 
    return (
      <>
      <table className="table table-striped bg-info table-hover ">
      <thead>
        <tr>
          <th scope="col">Account Number</th>
          <th scope="col">Account name</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <LoadAccount accounts={accounts} />
      </table>
      </>
    );
  }


var testaccounts = [
    { accountId: 1,accountNumber: "1", Name: "Account1", Balance: 10 },
    { accountId: 2,accountNumber: "2", Name: "Account2", Balance: 20 },
    { accountId: 3,accountNumber: "3", Name: "Account3", Balance: 30 },
    { accountId: 4,accountNumber: "4", Name: "Account4", Balance: 40 },
    { accountId: 5,accountNumber: "5", Name: "Account5", Balance: 50 },
  ];
  

  const AccountsCard=({setView})=>{
    return (
    <>
 
    <h4 style={{ marginTop: '40px'}}> Accounts </h4>
    <div className="container">
<div className="row row-cols-1 row-cols-md-5 g-4">
<div className="col">
    <div className="card" onClick={() => setView(Views.Account.Transactions)}>
        <div className="card-body" >
            <h5 className="card-title"> {testaccounts[0].Name}</h5>
            <AccountsData accountNumber={1} testaccounts={testaccounts} />
            <a href="#" className="btn btn-primary" onClick={() => setView(Views.Account.Transactions)}>Go somewhere</a>
        </div>
    </div>
</div>
</div>
</div>
</>
  )
  }
  export function AccountsData({ accountNumber, testaccounts }) {
    let filteredAccounts;
  
    // Filter transactions based on transactionNumber
    if (accountNumber === 1) {
      filteredAccounts = testaccounts.slice(0, 1); // Get the first transaction
    } else if (accountNumber === 2) {
      filteredAccounts = testaccounts.slice(1, 2); // Get the second transaction
    } else if (accountNumber === 3) {
      filteredAccounts = testaccounts.slice(2, 3); // Get the third transaction
    } else if (accountNumber === 4) {
      filteredAccounts = testaccounts.slice(3, 4); // Get the forth transaction
    } else if (accountNumber === 5) {
      filteredAccounts = testaccounts.slice(4, 5); // Get the fifth transaction
    }
    
    return (
      <div>
        {/* Render filtered transactions *///}
      /*  {filteredAccounts.map((account) => (
          <div key={account.accountId}>
            <p>Number: {account.accountNumber}</p>
            <p>Name: {account.Name}</p>
            <p>Balance: {account.Balance}</p>
          </div>
        ))}
      </div>
    );
}
*/

import axios from 'axios';

async function getAccounts(){
  try{
    const response = await axios.get('http://localhost:5160/Account/test');
    return response.data;
  }catch (error) {
    console.error(error);
    return [];
  }
}

export default function Accounts() {
  var accounts = testAccounts;
  console.log(accounts);
  return (
    <>
      <AccountList accounts={ accounts } />
    </>
  )
}

function LoadTransPage(accountId){
  console.log(accountId);
}

function AccountCard({ account }) {
  return (
    <div className="col" onClick={() => LoadTransPage(account.accountId)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{account.Name}</h5>
          <div>
            <p>Balance: {account.Balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountList({ accounts }) {
  return (
    <>
      <h4 style={{ marginTop: '40px'}}>Accounts</h4>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {accounts.map((account) => { return(
            <div key={account.accountId}>
              <AccountCard account={account} />
            </div>
          );})}
        </div>
      </div>
    </>
  );
}


var testAccounts = [
  { accountId: 1, accountNumber: "1", Name: "Account1", Balance: 10 },
  { accountId: 2, accountNumber: "2", Name: "Account2", Balance: 20 },
  { accountId: 3, accountNumber: "3", Name: "Account3", Balance: 30 },
  { accountId: 4, accountNumber: "4", Name: "Account4", Balance: 40 },
  { accountId: 5, accountNumber: "5", Name: "Account5", Balance: 50 },
];