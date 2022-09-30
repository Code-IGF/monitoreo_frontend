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
            <div className="container">
                <h2>Administracion</h2>
                <div className="row">
                    <div className="col-3 ">
                    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
                    </div>
                    <div className="col-3">
                        <p>5 Columnas</p>
                    </div>
                    <div className="col-3 ">
                        <p>2 columnas</p>
                    </div>
                    <div className="col-3 ">
                        <p>6 columnas </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Dashboard;