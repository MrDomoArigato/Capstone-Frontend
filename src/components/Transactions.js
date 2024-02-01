function LoadTransaction({transaction}){
  return (
    <div id={transaction.transactionId}>
      <span className="p-2">{transaction.transactionId}</span>
      <span className="p-2">{transaction.Date}</span>
      <span className="p-2">{transaction.Description}</span>
      <span className="p-2">{transaction.Amount}</span>
      <span className="p-2">{transaction.Balance}</span>
    </div>
  );
}

function TransactionList({transactions}){
  var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);

  return (
    <div>{transactionlist}</div>
  );
}

export default function Transactions(){
  var testtransactions = [
    {transactionId: 0, accountId: 0, Date: "1/1/24", Description: "Description1", Type: "Purchase1", Amount: 100.00, Balance: 0},
    {transactionId: 1, accountId: 0, Date: "1/2/24", Description: "Description2", Type: "Purchase2", Amount: 100.00, Balance: 0},
    {transactionId: 2, accountId: 0, Date: "1/3/24", Description: "Description3", Type: "Purchase3", Amount: 100.00, Balance: 0},
    {transactionId: 3, accountId: 0, Date: "1/4/24", Description: "Description4", Type: "Purchase4", Amount: 100.00, Balance: 0},
    {transactionId: 4, accountId: 0, Date: "1/5/24", Description: "Description5", Type: "Purchase5", Amount: 100.00, Balance: 0}
  ]

  return(
    <>
      <TransactionList transactions={testtransactions} />
    </>
  );
}