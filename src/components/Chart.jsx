import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend , CategoryScale , LinearScale , PointElement , LineElement } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend , CategoryScale , LinearScale , PointElement , LineElement);

const Chart = ({arr=[] , curr , days}) => {
  let prices = [];
  let dates = [];
  for(let i=0; i<arr.length; i+=2){
    if(days === '24h'){
      dates.push(new Date(arr[i][0]).toLocaleTimeString());
    }else{
      dates.push(new Date(arr[i][0]).toLocaleDateString());
    }
    prices.push(arr[i][1]);
  }

  return (
    <Line 
      options={{responsive:true}}
      data={{
        labels:dates,
        datasets:[{
          label:`Price in ${curr}`,
          pointRadius:'1',
          data:prices,
          borderColor:'rgb(255,99,132)',
          backgroundColor:'rgba(255,99,132,0.5)'
        }]
      }}
    />
  )
}

export default Chart;