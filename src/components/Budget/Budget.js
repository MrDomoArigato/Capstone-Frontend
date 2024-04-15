import React, { useRef, useEffect , useState} from "react";
import { getBudgets } from '../../services/budget'; 
import { Views } from '../../enums';

import { Chart } from "chart.js/auto";

export function Budget({data, labels}){
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() =>{
        if(chartInstance.current){
            chartInstance.current.destroy();
        }

        //obtain the 2D rendering context of the canvas,required for creating a new Chart.js instance.
        const myChartRef = chartRef.current.getContext("2d");
        
        //chartInstance is a reference to the Chart.js instance
        //This reference is useful for tracking the Chart.js instance 
        //and performing operations like destruction when the component unmounts or when the data changes.
        chartInstance.current = new Chart(myChartRef,{ // used to store the created Chart.js instance
            type: 'doughnut',
            data: {
                labels: labels,
                  datasets: [{
                    data: data,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'green',
                        'gray'
                    ],
                    hoverOffset: 4
                }] 
            }
        }); 
        return() =>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
        }

    },[data, labels]);

    return (  
    <div style={{ width: "900px", height: "500px" }}>
        <canvas ref={chartRef} />
        </div>
    )
}

export default function SetBudget(){
    const data = [200,1000,1200,100, 200];
    const labels = ['Auto', 'Rent', 'Education', 'Art and Music', 'Food and Restaurants'];

    return (
        <div>
            < Budget data={data} labels={labels} />
        </div>
    );
}