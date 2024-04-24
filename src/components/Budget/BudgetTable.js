import { getBudgets } from '../../services/budget';
import './Budget.css';

function BudgetRow({ budget }) {
    return (
      <>
        <td>{budget.transactionType}</td>
        <td>{budget.amount.toFixed(2)}</td>
      </>
    )
  } 

  function UpdateBudget({budget}){
    return(
        <button>Edit</button>
    )
  }
function BudgetTable() {
    return (
      <>

    <div className="table-container budget-container">
      <h4 style={{ marginTop: '40px'}}>Budget Summary</h4>
      <table className="table table-striped bg-info budget-table my-10 mx-10">
      <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        <tr>
            <td>Rent</td>
            <td>$1000</td>
            <td><button className="delete">Edit</button></td>
        </tr>
        <tr>
            <td>Groceries</td>
            <td>$100</td>
            <td><button className="delete">Edit</button></td>
        </tr>
        <tr>
            <td>Insurance</td>
            <td>$120</td>
            <td><button className="delete">Edit</button></td>
        </tr>
        <tr>
            <td>Rent</td>
            <td>$1000</td>
            <td><button className="delete">Edit</button></td>
        </tr>
        
       {/*}   {state.Budget.current.map((budget) => {
            return (
              <tr key={budget.id}>
                <BudgetRow budget={budget} />
                <UpdateBudget budget={budget}/>
              </tr>
            )
          })}*/}
        </tbody>
      </table>
      </div>
      
    </>
    )
  }

  export default function Budgets() {
    return (
      <>
        <BudgetTable />
      </>
    );
  }