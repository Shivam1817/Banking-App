"use client"

import { Doughnut } from 'react-chartjs-2';
import { Chart as chartjs, ArcElement , Tooltip, Legend } from 'chart.js';

chartjs.register(ArcElement , Tooltip ,Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label: 'Banks',
            data: [1000 , 1520.25 , 620.45],
            backgroundColor: ['#0747b6' , '#2265d8' , '#2f91fa']
        }
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3']
  }
    return <Doughnut 
        data={data}
        options={{
            cutout: '50%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
    />
}

export default DoughnutChart
