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
            <td>
        <button class ="edit" onclick="editRow(this)">Edit</button>
        <button class="delete" onclick="deleteRow(this)">Delete</button>
      </td>
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
        <th scope ="col">Action</th>
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
    <>
     <TransactionModal />
    <TransactionList transactions={testtransactions} />
    </>
  );
}

export function TransactionModal() {
  return (
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click here to add transactions
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a transaction</h1>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="transactionDate">Transaction date:</label>
          <input type="date" id="transactionDate" name="transactionDate"></input>
        </div>
        <div class="mb-3">
          <label for="Description" class="col-form-label">Description:</label>
          <input type="text" class="form-control" id="description"/>
        </div>
        <div class="mb-3">
        <label for="Description" class="col-form-label">Transaction type:</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="auto">Auto</option>
          <option value="bills & utilities"> Bills & utilities</option>
          <option value="education">Education</option>
          <option value="movies">Movies, Music & News</option>
          <option value="fees">Fees</option>
          <option value="food">Restaurants, Groceries, Bars & Alcohol</option>
          <option value="gifts">Gifts</option>
          <option value="health">Health & Well Being</option>
          <option value="home">Home & Furnishings</option>
          <option value="mortgage">Mortgage & Rent</option>
          <option value="income">Income</option>
          <option value="hygiene">Hygiene</option>
          <option value="pets">Pets</option>
          <option value="shopping">Shopping</option>
          <option value="taxes">Taxes</option>
          <option value="transfer">Transfer</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="amount" class="col-form-label">Transaction Amount:</label>
          <input type="number" class="form-control" id="balance" step="0.01" min="0"/>
        </div>
        <div class="mb-3">
          <label for="amount" class="col-form-label">Balance:</label>
          <input type="number" class="form-control" id="balance" step="0.01" min="0"/>
        </div>
    </form>
      </div> 
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export function transactionType(){
  
}
