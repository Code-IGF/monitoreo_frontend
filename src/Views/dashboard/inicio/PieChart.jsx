import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

  export function PieChart({etiquetas, empleadosPorEquipo}){

  const data = {
  labels: etiquetas,
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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

//Se reciben como parametro los datos de la consulta
export function PieChart({etiquetas, empleadosPorEquipo}) {



  //Datos de configuración de la grafica
  const data = {
    //Asignando etiquetas
    labels: etiquetas,
    datasets: [
      {
        label: '# of Votes',
        //Asignando datos
        data: empleadosPorEquipo,
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


  return(
    empleadosPorEquipo?
    <Pie data ={data} options={options}/>
    :
    <div className="spinner-border text primary" role="status">


  return (
    empleadosPorEquipo?
    <Pie data={data} options={options} />
    :
    <div className="spinner-border text-primary" role="status">

      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

