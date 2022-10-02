import { color } from '@mui/system';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
    
  } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
<link rel="stylesheet" href="index.css"></link>

  

  
  const Dashboard = ()=>{
    return(
        <div>
            <div className="container text center" >
            
                <h2>Supervisión</h2>
                <div className="row align-items-center">
                    <div className="col">
                   {/*  <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard> */} 
                    <Button variant="outlined" color="primary">
                        Sala de trabajo
                        <VideocamIcon color = "info">

                        </VideocamIcon>
                    </Button>
                    <Button variant="outlined" color="primary">
                        Equipos asignados
                    </Button>
                    <Button variant="outlined" color="primary">
                        Fecha
                       <td> <CalendarMonthIcon color = "info">
                            
                        </CalendarMonthIcon></td>
                       
                    </Button>
                    <Button variant="outlined" color="primary">
                        Empleados en Linea
                    </Button>
                   
                      
                    
                   </div>
                  

                 {/*    <div className="col" >
                        <p> Sala de trabajo</p>
                    </div>
                    <div className="col">
                        <p> Equipo Asignados</p>
                    </div>
                    <div className="col">
                        <p> Columnas </p>
                    </div>
                    <div className="col">
                        <p> Fecha </p>
                        
                    </div>
                    <div className="col">
                        <p> Empleados en linea </p>
                    </div> */}
                 
                     </div>
                     
            </div>
            {/* Tabla  */}
          <div className="pt-5">
            <table class="table table-hover table-bordered">
              <thead className='table-primary'>
                <p>Empleados Activos</p>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Area</th>
                  <th scope="col">Supervisor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Equipo1</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td><MoreVertIcon></MoreVertIcon></td>
                </tr>
              </tbody>
            </table>
          
        {/* grafico de pastel */}
            <h6 class = "title_grafico">Distribucion de equipos</h6>
            <section class = "container_grafico">
                <div class = "grafico"></div>
                <div class ="container_leyenda">
                    <span class = "leyenda_all">
                        <span class = "color_A"></span>
                        <p class="equipo">A</p>
                    </span>
                    <span class = "leyenda_all">
                        <span class = "color_B"></span>
                        <p class="equipo">B</p>
                    </span>
                    <span class = "leyenda_all">
                        <span class = "color_C"></span>
                        <p class="equipo">C</p>
                    </span>

                </div>


            </section>
      
        </div>
        </div>
    );
}
export default Dashboard;