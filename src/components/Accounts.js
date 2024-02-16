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

