function LoadTransaction({transactions}){
  let runningBalance = 0;
  return (
    <tbody className="table-group-divider">
    {transactions.map((transaction) => {
      runningBalance += transaction.Amount; // to keep track of Account Balance after each transaction is loaded into table
      return (
          <tr key={transaction.transactionId}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Type}</td>
            <td>${transaction.Amount.toFixed(2)}</td>
            <td>${runningBalance.toFixed(2)}</td> 
          </tr>
      );
    })}
    </tbody>
  );
}

function TransactionList({transactions}){
  //var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);
  

  return (
    <>
    <table className="table table-striped bg-info table-hover ">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Type</th>
        <th scope="col">Amount</th>
        <th scope="col">Available balance</th>
      </tr>
    </thead>
    <LoadTransaction transactions={transactions} />
    </table>
    </>
  );
}

export default function Transactions(){
  var testtransactions = [
    {transactionId: 0, accountId: 0, Date: "1/1/24", Description: "Description1", Type: "Purchase1", Amount: +100.00, Balance: 0},
    {transactionId: 1, accountId: 0, Date: "1/2/24", Description: "Description2", Type: "Purchase2", Amount: -20.50, Balance: 0},
    {transactionId: 2, accountId: 0, Date: "1/3/24", Description: "Description3", Type: "Purchase3", Amount: -50.48, Balance: 0},
    {transactionId: 3, accountId: 0, Date: "1/4/24", Description: "Description4", Type: "Purchase4", Amount: +516.30, Balance: 0},
    {transactionId: 4, accountId: 0, Date: "1/5/24", Description: "Description5", Type: "Purchase5", Amount: -100.00, Balance: 0}
  ]

  return(
    <TransactionList transactions={testtransactions} />
  );
}
