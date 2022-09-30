import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
  } from 'mdb-react-ui-kit';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
  import GroupAddIcon from '@mui/icons-material/GroupAdd';
  import React, { useState } from 'react';

function Equipos(){

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    return(
      <div>
        <div className="container pt-5">
          <div className="row">
              <div className="col">
                  <h2>Administración de Equipos</h2>
              </div>
              {/*text-end (elementos con texto al final) text-center (texto centrado) text-start (texto al inicio)*/}
              <div className="col text-end">
                  <MDBBtn onClick={toggleShow}>    
                      <div><spand className="pe-4"><GroupAddIcon></GroupAddIcon></spand> Agregar Equipo</div>
                  </MDBBtn>
              </div>
          </div>
          {/* Tabla  */}
          <div className="pt-5">
            <table class="table table-hover table-bordered">
              <thead className='table-primary'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre Equiipo</th>
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
          </div>
        </div>
        {/* Modal */}      
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Requistro Equipos</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                  <form action="">
                      <MDBInput label='Nombre de Equipo' id='id-input-nombre-equipo' type='email' />
                  </form>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
    );
}
export default Equipos;