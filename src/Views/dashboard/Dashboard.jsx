import { color } from '@mui/system';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
  const Dashboard = ()=>{
    return(
        <div>
            <div className="container text center">
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
                    </div>
                    <div className="col">
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
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Dashboard;