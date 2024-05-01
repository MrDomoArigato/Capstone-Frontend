import React, { useRef, useEffect , useState} from "react";
import { getBudgets, updateBudgetItem, deleteBudgetItem } from '../../services/budget'; 
import './Budget.css';

import { Chart } from "chart.js/auto";


function BudgetChart({ budgets, title }) {
  function getBudgetInfo(buds){
    let descriptions = [];
    let amounts = [];

    buds.forEach(bud => {
      descriptions.push(bud[0].description);
      amounts.push(bud[0].amount);
    });

    return [descriptions, amounts];
  }

  let [labels, data] = getBudgetInfo(budgets);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "green",
              "gray",
              "purple",
              "white",
              "blue",
              "red",
              "orange",
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title,
            font: {
              size: 20
            },
            color: 'white',
            position: 'top' // Center the title
          },
          legend: {
            labels: {
              color: "white"
            }
          },
          doughnutLabel: {
            labels: [
              {
                text: title,
                font: {
                  size: 40
                },
                color: 'black',
                position: 'center'
              }
            ]
          }
        },
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, title]);

  return (
    <div style={{ width: "500px", height: "500px", marginTop: "60px", marginLeft: "50px"}}>
      <canvas ref={chartRef} />
    </div>
  );
}

function BudgetRow({ budget, state }) {
  return (
    <>
      <td>{budget.description}</td>
      <td id={`amount-${budget.id}`}>${budget.amount ? budget.amount.toFixed(2) : '?'}</td>
      <td>
        <button className="delete btn px-2 py-1"
          onClick={(e)=>{
            var amount = document.getElementById(`amount-${budget.id}`);
            if(e.target.textContent === "Edit"){
              Array.from(document.getElementsByClassName("btn delete")).forEach((b) => {
                b.disabled = true;
              });
              var edittbx = document.createElement("input");
              Object.assign(edittbx, {id: "edit-amount", className: "form-control", type: "number"});
              amount.innerHTML = "";
              amount.appendChild(edittbx);
              e.target.textContent = "Save";
              e.target.disabled = false;
            } else if(e.target.textContent === "Save"){
              var edittbxa = document.getElementById("edit-amount");
              budget.amount = parseInt(edittbxa.value);
              updateBudgetItem(budget);
              edittbxa.remove();
              amount.innerText = `$${budget.amount.toFixed(2)}`;
              Array.from(document.getElementsByClassName("btn delete")).forEach((b) => {
                b.disabled = false;
              });
              e.target.textContent = "Edit";
              const updated = state.Budget.current.filter((b) => b[0].id !== budget.id).concat([[budget]]);
              state.Budget.set(updated);
            }
          }}>Edit</button>
          <button className="delete btn px-2 py-1"
            onClick={ (e)=>{
            deleteBudgetItem({id: budget.id});
            const updated = state.Budget.current.filter((b) => b[0].id !== budget.id);
            state.Budget.set(updated);}}
          >Delete</button>
      </td>
    </>
  )
}

function CreateBudgetRow({ state }){
  return (
  <tr>
    <td>
      <select id="create-type" className="form-select" defaultValue="none">
        <option value="none" disabled>Select One</option>
        {state.TransactionTypes.current.map((type) => (
          !state.TransactionFilter.current.includes(type[0].id) ? (<option key={type[0].id} value={type[0].id}>{type[0].description}</option>) : null
        ))}
      </select>
    </td>
    <td><input id="create-amount" className="form-control" type="number"></input></td>
    <td>
      <button className="delete btn px-2 py-1" 
        onClick={(e) => {
          var createType = document.getElementById("create-type");
          var createAmount = document.getElementById("create-amount");
          if(createType.value === "none")
            createType.classList.add("is-invalid");
          if(createAmount.value <= 0)
            createAmount.classList.add("is-invalid");
          if(createType.value !== "none" && createAmount.value > 0){
            var budget = {"id": createType.value, "description": createType.selectedOptions[0].text, "amount": parseInt(createAmount.value)};
            updateBudgetItem(budget);
            state.Budget.set(state.Budget.current.concat( [[budget]] ));
            createType.classList.remove("is-invalid");
            createAmount.classList.remove("is-invalid");
            createType.selectedIndex = 0;
            createAmount.value = '';
          }
        }}>Save</button>
    </td>
  </tr>
  )
}

function BudgetTable({ state }) {
  return (
    <>
      <div className="table-container budget-container">
        <h4 style={{ marginTop: '40px' }}>Budget Summary</h4>
        <table className="table table-striped bg-info budget-table my-10 mx-10">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {state.Budget.current.sort((a, b) => (a[0].id > b[0].id)?1:-1).map((budgetSet) => { 
              return(
              <tr key={budgetSet[0].id} id={`row-${budgetSet[0].id}`}>
                <BudgetRow budget={budgetSet[0]} state={ state } />
              </tr>
            )})}
            <CreateBudgetRow state={ state } />
          </tbody>
        </table>
      </div>
    </>
  )
}

export function BudgetCard({ state }) {
  const [TTFilter, setTTFilter] = useState([]);
  state['TransactionFilter'] = {current: TTFilter, set: setTTFilter};
  const [budgets, setBudget] = useState([]);
  state['Budget'] = {current: budgets, set: setBudget};
  const title = "Budget";

  

  const getBudgetData = async () => {
    const response = await getBudgets();

    if(!response) return [];

    const { data: budgetitems } = response;
    if (budgetitems && budgetitems.length){
      var tfil = [];
      budgetitems.forEach((i)=>{tfil.push(i[0].id)});
      setBudget(budgetitems);
      if(budgetitems.length === tfil.length)
        setTTFilter(tfil);
    }
  }

  useEffect(() => {
    getBudgetData();
  }, []);

  

  return (
    <div className="col my-5 mx-4" data-testid="budget-card">
      <h5 style={{ marginTop: '40px' }}>Budget</h5>
      <div className="card budget-card" >
        <div className="card-body budget-body" >
          <div>
            <BudgetChart budgets={state.Budget.current} title={title} />
            <BudgetTable state={ state } />
          </div>
        </div>
      </div>
    </div>
  );
}
