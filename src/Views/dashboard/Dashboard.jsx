
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import LineChart from './inicio/LineChart';
import { PieChart } from './inicio/PieChart';

<link rel="stylesheet" href="index.css"></link>  
  const Dashboard = ()=>{
    return(
        <div>
          <div className="container pt-4" >  
            <h2>Supervisión</h2>
              {/*  Tarjetas iniciales  */}
            <div className="row align-items-center pb-4">
              {/*Cards */}
              
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
                        <div>03</div>
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
                        <div>03</div>
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
                      <div className="col row">
                        <div>03</div>
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
            </div>
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
                <PieChart></PieChart>
                </div>
              </div>
            </div>             
          </div>
        </div>
    );
}
export default Dashboard;