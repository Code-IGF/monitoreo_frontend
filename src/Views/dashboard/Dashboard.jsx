
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';


/* import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors'; */

import LineChart from '../../components/LineChart';
import { BarChart } from '../../components/BarChart';

import AuthUser from "../../components/AuthUser";
import { useEffect, useState } from "react";
import Card from '../../components/Card';



<link rel="stylesheet" href="index.css"></link>  
  const Dashboard = ()=>{
    
    //Fecha y Hora 
    const [fecha2, setFecha]=useState("");
    const [equiposAsignados, setEquiposAsignados]=useState();
    const [cantidadSalas, setCantidadSalas]=useState();

    //Varibales que almacenan los datos de la grafica
    const [etiquestas, setEtiquetas] = useState([]);
    const [empleadosPorEquipo, setEmpleadosPorEquipo] = useState([]);


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
            res.data.equipo?
              setEquiposAsignados(res.data.equipo.length)
              :
              setEquiposAsignados(res.data.length)
          }
        );
        }

      const consultarSalas = (url) =>{ 
        http.get(url).then(
          (res)=>{
            //Llenando Etiquetas y datos de la grafica de pastel
            const empleados=[]
            const etiqueta=[]
            res.data.forEach((sala)=>{
              //Llenando etiquetas
              etiqueta.push(`Equipo ${sala.id}`)
              empleados.push(sala.empleados)
            });
            setEmpleadosPorEquipo(empleados);
            setEtiquetas(etiqueta)
            setCantidadSalas(res.data.length);
          }
        );
      }

      useEffect(()=>{
        consultarSalas('/equipos/cantidad');
        consultarEquipos('usuario/miEquipo');
        // eslint-disable-next-line 
      },[]);
      
      useEffect(()=>{
        fechas()
        // eslint-disable-next-line 
      },[])
      //setInterval(fecha, 1000);
    return(
        <div>
          <div className="container-fluid p-5">  
              {/*  Tarjetas iniciales  */}
            <div className="row align-items-center pb-4">
              {/*Cards */}
              {/*Salas de trabajo*/}
              <div className="col-12 col-md-6 col-lg-3 text-center pb-3">
                <Card Icon={VideocamIcon} dato={cantidadSalas} titulo={'Salas de Trabajo'}/>
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center pb-3">
                <Card Icon={GroupIcon} dato={equiposAsignados} titulo={'Mis Equipos'}/>
              </div>
              <div className="col-12 col-md-6 col-lg-3 text-center pb-3">
                <Card Icon={CalendarMonthIcon} dato={fecha2} titulo={'Fecha'}/>  
              </div> 
              <div className="col-12 col-md-6 col-lg-3 text-center pb-3">
                <Card Icon={PersonIcon} dato={""} titulo={'Personal en línea'}/> 
              </div>
            </div>    
      

            {/** Grafico 1 */}
            <div className="row pb-4">
              <div className="col-12 col-md-9">
                <div className="card mb-4">
                  <div className="badge bg-primary rounded-0 fs-6" role="alert">
                    Registro semanal de asistencia
                  </div>
                  <LineChart></LineChart>
                </div>
                <div className="card mb-4">
                  <div className="badge bg-primary rounded-0 fs-6" role="alert">
                    Distribución de personal por equipo
                  </div>
                {
                  //La variable se asigna al finalizar la función "Consultar salas", 
                  //La grafica se debe renderizar hasta que ya se hayan asignado las eqtiquetas y los empleados por etiqueta
                  //Si se renderiza antes puede causar un error
                  empleadosPorEquipo?
                    <BarChart 
                      etiquetas={etiquestas}
                      empleadosPorEquipo={empleadosPorEquipo}
                    ></BarChart>
                  :
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                }
                </div>
              </div>
              
              <div className="col-12 col-md-3">
                {/**Tabla de usuarios Activos */}
                <div className="table-responsive" >
                  <table className="table table-hover table-bordered">
                    <thead className='table-primary'>
                      <tr>
                        <th 
                          colSpan={3} 
                          className="text-center text-white bg-primary rounded-0 fs-6"
                          >Empleados Activos
                          </th>
                      </tr>
                      <tr>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Equipo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* primer persona */}
                      <tr>
                        <td><ImageIcon></ImageIcon></td>
                        <td>Francisco Alfredo</td>
                        <td>Equipo 2
                        <MoreVertIcon></MoreVertIcon>
                        </td>
                      </tr>
                      <tr>
                          {/* segunda persona */}
                        <td><ImageIcon></ImageIcon></td>
                        <td>Rosa Amalia </td>
                        <td>Equipo 2
                        <MoreVertIcon></MoreVertIcon>
                        </td>
                      </tr>
                      <tr>
                          {/* tercera persona */}
                        <td><ImageIcon></ImageIcon></td>
                        <td>Kevin Daniel</td>
                        <td>Equipo 2
                        <MoreVertIcon></MoreVertIcon>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-8">
              
              </div>
            </div>
            {/** Tabla de usuarios activos y grafico de pastel */}
            <div className="row">
            </div>             
          </div>
        </div>
    );
}
export default Dashboard;