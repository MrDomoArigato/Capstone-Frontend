import React, { useRef, useEffect , useState} from "react";
import './Budget.css';
import Budgets from "./BudgetTable";
import { Chart } from "chart.js/auto";


export function Budget({ data, labels, title }) {
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
              "purple"
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
            color: 'black',
            position: 'top' // Center the title
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
    <div style={{ width: "400px", height: "400px" }}>
      <canvas ref={chartRef} />
    </div>
  );
}

export function BudgetCard() {

    const data = [200,1000,1200,100, 200];
    const labels = ['Auto', 'Rent', 'Education', 'Art and Music', 'Food and Restaurants'];
    const title = "Budget";

    return (
        
      <div className="col my-5 mx-4"  data-testid="budget-card">
       
        <div className="card budget-card" >
          <div className="card-body budget-body" >
            <div>
            < Budget data={data} labels={labels} title ={title} />
            <Budgets />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default function setBudget(){
    const data = [200,1000,1200,100, 200];
    const labels = ['Auto', 'Rent', 'Education', 'Art and Music', 'Food and Restaurants'];
   

    return (
        <div>
          {/*}  < Budget data={data} labels={labels} />*/}
            < BudgetCard/>
        </div>
    );
}