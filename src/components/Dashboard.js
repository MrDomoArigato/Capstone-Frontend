import Accounts from './Accounts';
import { testtransactions, TransactionList, Transactions, LoadTransaction } from './Transactions';

export default function Dashboard(){
    return(
    <>
    <p className="me-3" style={{ marginBottom: '5px', marginTop: '40px' }}>Welcome to the home page, please select an account from the following list to see the most recent updates</p>

    <Accounts/>
    
    {/*<RecentTransactionsCard/>*/}
    {/*<CurrentBalance/>*/}
    </>
    );
}

/*const CurrentBalance = () => {
    return (
      <>
        <h4>Current Balance</h4>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
                
              <div className="card-body">
                <h5 className="card-title">Current Balance</h5>
                <p>{testtransactions[0].Balance}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

const RecentTransactionsCard=()=>{
    return (
    <>
 
    <h4 style={{ marginTop: '40px'}}>Recent Transactions</h4>
    <div className="container">
<div className="row row-cols-1 row-cols-md-5 g-4">
<div className="col">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title"> {testtransactions[0].Description}</h5>
            <RecentTransactions transactionNumber={1} testtransactions={testtransactions} />
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div className="col">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{testtransactions[1].Description}</h5>
            <RecentTransactions transactionNumber={2} testtransactions={testtransactions} />
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div className="col">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{testtransactions[2].Description}</h5>
            <RecentTransactions transactionNumber={3} testtransactions={testtransactions} />
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div className="col">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{testtransactions[3].Description}</h5>
            <RecentTransactions transactionNumber={4} testtransactions={testtransactions} />
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
<div className="col">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{testtransactions[4].Description}</h5>
            <RecentTransactions transactionNumber={5} testtransactions={testtransactions} />
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</div>
</div>
</div>
</>
  )
  }
export function RecentTransactions({ transactionNumber, testtransactions }) {
    let filteredTransactions;
  
    // Filter transactions based on transactionNumber
    if (transactionNumber === 1) {
      filteredTransactions = testtransactions.slice(0, 1); // Get the first transaction
    } else if (transactionNumber === 2) {
        filteredTransactions = testtransactions.slice(1, 2); // Get the second transaction
    } else if (transactionNumber === 3) {
        filteredTransactions = testtransactions.slice(2, 3); // Get the third transaction
    } else if (transactionNumber === 4) {
        filteredTransactions = testtransactions.slice(3, 4); // Get the forth transaction
    } else if (transactionNumber === 5) {
        filteredTransactions = testtransactions.slice(4, 5); // Get the fifth transaction
    }
    
    return (
      <div>
        {/* Render filtered transactions *///}
      /*  {filteredTransactions.map((transaction) => (
          <div key={transaction.transactionId}>
            <p>Date: {transaction.Date}</p>
            <p>Type: {transaction.Type}</p>
            <p>Amount: {transaction.Amount}</p>
          </div>
        ))}
      </div>
    );
}
*/