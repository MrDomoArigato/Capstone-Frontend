import logo from './logo.svg';
import './App.css';

var transactions = [
  {transactionId: 0, accountId: 0, Date: "1/1/24", Recipient: "Person1", Description: "Description1", Type: "Purchase1", Deposit: 100.00, Withdraw: 0},
  {transactionId: 1, accountId: 0, Date: "1/2/24", Recipient: "Person2", Description: "Description2", Type: "Purchase2", Deposit: 100.00, Withdraw: 0},
  {transactionId: 2, accountId: 0, Date: "1/3/24", Recipient: "Person3", Description: "Description3", Type: "Purchase3", Deposit: 100.00, Withdraw: 0},
  {transactionId: 3, accountId: 0, Date: "1/4/24", Recipient: "Person4", Description: "Description4", Type: "Purchase4", Deposit: 100.00, Withdraw: 0},
  {transactionId: 4, accountId: 0, Date: "1/5/24", Recipient: "Person5", Description: "Description5", Type: "Purchase5", Deposit: 100.00, Withdraw: 0}
]

function LoadTransaction({transaction}){
  return (
    <div>
      <span class="p-2">{transaction.transactionId}</span>
      <span class="p-2">{transaction.Date}</span>
      <span class="p-2">{transaction.Recipient}</span>
      <span class="p-2">{transaction.Deposit}</span>
    </div>
  );
}

function TransactionList({transactions}){
  var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);

  return (
    <div>{transactionlist}</div>
  );
}

function App() {
  return (
    <TransactionList transactions={transactions} />
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
//}

export default App;
