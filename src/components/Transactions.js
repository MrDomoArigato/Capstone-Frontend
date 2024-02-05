function LoadTransaction({transaction}){
  return (
    <div id={transaction.transactionId}>
      <span className="p-2">{transaction.transactionId}</span>
      <span className="p-2">{transaction.Date}</span>
      <span className="p-2">{transaction.Description}</span>
      <span className="p-2">{transaction.Amount}</span>
      <span className="p-2">{transaction.Balance}</span>
    </div> // edit to be iterable through table
  );
}

function TransactionList({transactions}){
  var transactionlist = transactions.map(transaction => <LoadTransaction transaction={transaction} />);

  return (
    <div>{transactionlist}</div>
  );
}

function AccountBalance(transaction, currentBalance){
  if(transaction>=0){
   return (currentBalance +=transaction ); 
  }
  return (currentBalance -= transaction);
};

export default function Transactions(){
  var testtransactions = [
    {transactionId: 0, accountId: 0, Date: "1/1/24", Description: "Description1", Type: "Purchase1", Amount: 100.00, Balance: 0},
    {transactionId: 1, accountId: 0, Date: "1/2/24", Description: "Description2", Type: "Purchase2", Amount: 100.00, Balance: 0},
    {transactionId: 2, accountId: 0, Date: "1/3/24", Description: "Description3", Type: "Purchase3", Amount: 100.00, Balance: 0},
    {transactionId: 3, accountId: 0, Date: "1/4/24", Description: "Description4", Type: "Purchase4", Amount: 100.00, Balance: 0},
    {transactionId: 4, accountId: 0, Date: "1/5/24", Description: "Description5", Type: "Purchase5", Amount: 100.00, Balance: 0}
  ]

  /*return(
    <TransactionList transactions={testtransactions} />
  );*/
  return(
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Type</th>
      <th scope="col">State</th>
      <th scope="col">Amount</th>
      <th scope="col">Current balance</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <td>1/1/2024</td>
      <td>Purchase from Amazon</td>
      <td>Debit Card</td>
      <td>processing</td>     
      <td>$23.99</td>
     
      <td>$2000</td>
    </tr>
    <tr>
      <td>1/30/2024</td>
      <td>Summerset Apt</td>
      <td>Debit Card</td>
      <td>Processed</td>  
      <td>$800</td> 
      <td>-$1200</td>
    </tr>
    <tr>
      
      <td>2/3/2024</td>
      <td>LLC</td>
      <td>Deposit</td>
      <td>processed</td> 
      <td>$3000</td>
      <td>$4200</td>
    </tr>
  </tbody>
  </table>
    </>
  ); 
}