import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import AuthUser from "../../../components/AuthUser";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    fill: true,
    responsive: true,
    scales: {
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };


export function PieChart({salas}) {
  const {http}=AuthUser();

  const consultarSalas = (url) =>{ 
    http.get(url).then(
      (res)=>{
        res.data.map(sala=>{
          data.datasets[0].data.push(sala.empleados)
        })
      }
    );
    }

  const datos=()=>{
    http.get('/equipos/cantidad').then(
      (res)=>{
        console.log(res.data)
        res.data.map(sala=>{
          console.log(sala.empleados)
          data.datasets[0].data.push(sala.empleados)

          console.log(data.datasets[0].data)
        })
      }
    );
  }

  useEffect(()=>{
    datos();

    console.log(data.datasets[0].data)
  },[])

  return <Pie data={data} options={options} />;
}

