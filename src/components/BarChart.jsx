import { Chart as ChartJS,
    ArcElement, 
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


//Se reciben como parametro los datos de la consulta
export function BarChart({etiquetas, empleadosPorEquipo}) {



  //Datos de configuración de la grafica
  const data = {
    //Asignando etiquetas
    labels: etiquetas,
    datasets: [
      {
        label: 'Equipos',
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


  return (
    empleadosPorEquipo?
    <Bar data={data} options={options} style={{maxHeight:"50vh"}}/>
    :
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

