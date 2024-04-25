import React, { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import "./Overview.css";
import ChartZoom from 'chartjs-plugin-zoom';

const dataSets = [
  {
    label: "Income",
    data: [4000, 4500, 3200, 4100, 2000],
    backgroundColor: "rgba(54, 162, 235, 0.2)",
    borderColor: "rgba(54, 162, 235, 1)",
    borderWidth: 1,
  },
  {
    label: "Spending",
    data: [2700, 3000, 2000, 4400, 2300],
   
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 1,
  },
];

const data = [1100,300,400, 200, 100,200];
const labels = ['Rent', 'Car Insurance', 'Groceries','Food and Restaurants', 'Health Insurance'];
export function OverviewGraph({ dataSets, labels, title }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: labels,
        datasets: dataSets, 
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
            position: 'top' // Position the title at the top of the chart
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dataSets, labels, title]);

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <canvas ref={chartRef} />
    </div>
  );
}


export function SpendingChart({ data, labels, title }) {
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

  function calculateAverage(dataSets, label) {
    const dataSet = dataSets.find(data => data.label === label);
    if (!dataSet) return 0;
    const totalSpending = dataSet.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return totalSpending / dataSet.data.length;
  }
  
  
  export function GraphCard() {
  const averageSpending = calculateAverage(dataSets, "Spending");
  const averageIncome =  calculateAverage(dataSets, "Income");
  const title = "Summary"
  const incomeGreaterThanSpending = averageIncome > averageSpending;
  const labels = ["January", "February", "March", "April", "May"];
      return (  
        <div className="col my-4 mx-3 graph-card"  data-testid="graph-card">
          <h4 style={{ marginTop: '40px'}}>SUMMARY</h4>
          <div className="card">
            <div className="card-body">
              <div>
                <OverviewGraph dataSets={dataSets} labels={labels} title ={title}/>
             <div className="spending-info">
                  <div style={{ fontWeight: 'bold' }}>Last 6 Months</div>
                  <div>Your monthly average spending: ${averageSpending.toFixed(2)}</div>
                  <div>Your monthly average income: ${averageIncome.toFixed(2)}</div>
                  {incomeGreaterThanSpending && <div className="warning-message" style={{ color: 'green' }}>Average income is greater than average spending!</div>}
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }


    export function SpendingCard() {
      const title = " Total May Spending";
          return (  
            <div className="col my-4 mx-3 spending-card"  data-testid="spending-card">
              <div className="card">
                <div className="card-body">
                  <div className = "spending-chart"><SpendingChart data={data} labels={ labels} title={title}/></div>
                  <div>Overspending on: </div>
                  <div>Your spending is greater than your income</div>
                </div>
              </div>
            </div>
          );
        }


export default function Overview(){
    return (
        <div>
          <GraphCard/>
          <SpendingCard/>
        </div>
    );
}
