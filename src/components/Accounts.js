import { useState } from 'react';
export default function Accounts(){
    return(
        <>
     <AccountList accounts={testAccounts} />
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


var testAccounts = [
    { accountId: 1,accountNumber: "1", Name: "Account1", Balance: 10 },
    { accountId: 2,accountNumber: "2", Name: "Account2", Balance: 20 },
    { accountId: 3,accountNumber: "3", Name: "Account3", Balance: 30 },
    { accountId: 4,accountNumber: "4", Name: "Account4", Balance: 40 },
    { accountId: 5,accountNumber: "5", Name: "Account5", Balance: 50 },
  ];
  
