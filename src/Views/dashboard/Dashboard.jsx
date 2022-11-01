
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import LineChart from './inicio/LineChart';
import { PieChart } from './inicio/PieChart';

import AuthUser from "../../components/AuthUser";
import { useEffect, useState } from "react";




<link rel="stylesheet" href="index.css"></link>  
  const Dashboard = ()=>{
    
    //Fecha y Hora 
    const [fecha2, setFecha]=useState("");
    const [equiposAsignados, setEquiposAsignados]=useState();
    const [cantidadSalas, setCantidadSalas]=useState();

    //Varibales que almacenan los datos de la grafica
    const [etiquestas] = useState([]);
    const [empleadosPorEquipo] = useState([]);
    

    const fechas = ()=>{
      const nuevaFecha= new Date();

      const day = nuevaFecha.getDate();
      const month = nuevaFecha.getMonth() + 1;
      const fullYear = nuevaFecha.getFullYear();
      setFecha(`${day}/${month}/${fullYear}`);
    }


      //http
      const {http} = AuthUser();

      const consultarEquipos = (url) =>{ 
        http.get(url).then(
          (res)=>{
            setEquiposAsignados(res.data.equipo.length)
          }
        );
        }

      const consultarSalas = (url) =>{ 
        http.get(url).then(
          (res)=>{
            //Llenando Etiquetas y datos de la grafica de pastel
            res.data.map(sala=>{
              //Llenando etiquetas
              etiquestas.push(`Equipo ${sala.id}`)
              empleadosPorEquipo.push(sala.empleados)
            });

            setCantidadSalas(res.data.length)
          }
        );
      }

      useEffect(()=>{
        consultarSalas('/equipos/cantidad');
        consultarEquipos('usuario/miEquipo');
      },[]);
      
      useEffect(()=>{
        fechas()
      },[])

      //setInterval(fecha, 1000);
    return(
        <div>
          <div className="container pt-4" >  
            <h2>Inicio</h2>
              {/*  Tarjetas iniciales  */}
            <div className="row align-items-center pb-4">
              {/*Cards */}
              {/*Salas de trabajo*/}
              <div className="col-3 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Salas de Trabajo</h5>
                    <div className="row align-items-center w-100">
                      <div className="col align-items-center">
                        <VideocamIcon color = "info" fontSize="large" />
                      </div>
                      <div className="col  row">
                        <div id = "Equipo">
                          {cantidadSalas}
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Equipos Asignados</h5>
                    <div className="row align-items-center w-100">
                      <div className="col align-items-center">
                        <GroupIcon color = "info" fontSize="large" />
                      </div>
                      <div className="col row">
                        <div id = "consultarEquipos">
                          {equiposAsignados}
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="col-3 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Fecha</h5>
                    <div className="row align-items-center w-100">
                      <div className="col align-items-center">
                        <CalendarMonthIcon color = "info" fontSize="large" />
                      </div>
                      <div className="col row">
                        <div id = "clock">
                          {fecha2}
                        </div>
                        <script>
                          fecha
                        </script>
                      </div>
                    </div>                  
                  </div>
                </div>
              </div> 
              <div className="col-3 text-center">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Empleados en Linea</h5>
                    <div className="row align-items-center w-100">
                      <div className="col align-items-center">
                        <VideocamIcon color = "info" fontSize="large" />
                      </div>
                      <div>
                        <div className="col row">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
 
              </div>    
              {/* <div className="col">
                <Button variant="outlined" color="primary">
                    Sala de trabajo
                    <VideocamIcon color = "info">

                    </VideocamIcon>
                </Button>
                <Button variant="outlined" color="primary">
                    Equipos asignados
                    <td><GroupIcon color = "info"></GroupIcon></td>
                </Button>
                <Button variant="outlined" color="primary">
                    Fecha
                    <td> <CalendarMonthIcon color = "info">
                        
                    </CalendarMonthIcon></td>
                    
                </Button>
                <Button variant="outlined" color="primary">
                    Empleados en Linea
                    <td><PersonIcon></PersonIcon></td>
                </Button>  
              </div> */}

            {/** Grafico 1 */}
            <div className="row pb-4">
              <div className="col-12">
                <div className="card">
                  <LineChart></LineChart>
                </div>
              </div>
            </div>
            {/** Tabla de usuarios activos y grafico de pastel */}
            <div className="row">
              {/**Tabla de usuarios Activos */}
              <div className="col-12 col-md-8">
                <table className="table table-hover table-bordered">
                  <thead className='table-primary'>
                    <tr>
                      <th 
                        colSpan={6} 
                        className="text-center bg-white"
                        >Empleados Activos</th>
                    </tr>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Foto</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Equipo</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* primer persona */}
                    <tr>
                      <th scope="row"><CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon></th>
                      <td><ImageIcon></ImageIcon></td>
                      <td>Francisco Alfredo</td>
                      <td>Castaneda Zepeda</td>
                      <td>Equipo 1</td>
                      <td><MoreVertIcon></MoreVertIcon></td>
                    </tr>
                    <tr>
                        {/* segunda persona */}
                      <th scope="row"><CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon></th>
                      <td><ImageIcon></ImageIcon></td>
                      <td>Rosa Amalia </td>
                      <td>Roldan Castillo</td>
                      <td>Equipo 2</td>
                      <td><MoreVertIcon></MoreVertIcon></td>
                    </tr>
                    <tr>
                        {/* tercera persona */}
                      <th scope="row"><CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon></th>
                      <td><ImageIcon></ImageIcon></td>
                      <td>Kevin Daniel</td>
                      <td>Monge Orellana</td>
                      <td>Equipo 3</td>
                      <td><MoreVertIcon></MoreVertIcon></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*Grafico de Pastel*/}
              <div className="col-12 col-md-4">
                <div className="card">
                  {
                    //La variable se asigna al finalizar la función "Consultar salas", 
                    //La grafica se debe renderizar hasta que ya se hayan asignado las eqtiquetas y los empleados por etiqueta
                    //Si se renderiza antes puede causar un error
                    empleadosPorEquipo?
                      <PieChart 
                        etiquetas={etiquestas}
                        empleadosPorEquipo={empleadosPorEquipo}
                      ></PieChart>
                      :
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                  }
                </div>
              </div>
            </div>             
          </div>
        </div>
    );
}
export default Dashboard;