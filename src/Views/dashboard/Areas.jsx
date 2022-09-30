import React from "react";
import { useState } from "react";
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
    MDBTextArea
  } from 'mdb-react-ui-kit';
//Iconos
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';

const Areas=()=>{
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);

    return(
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col">
                        <h2>Administración de Departamentos</h2>
                    </div>
                    <div className="col text-end">
                        {/*Boton para abrir modal*/}
                        <MDBBtn onClick={toggleShow}>    
                            <div>
                                <spand className="pe-4">
                                    <BusinessCenterIcon></BusinessCenterIcon>
                                </spand> Agregar Departamento
                            </div>
                        </MDBBtn>
                    </div>
                   <div className="pt-5">
                    {/*Tabla*/}
                    <table class="table table-hover table-bordered text-center">
                        <thead className='table-primary'>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Departamento</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Fecha de Creación</th>
                            <th scope="col">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Equipo1</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>
                            <IconButton color="primary" aria-label="Editar Departamento" component="label">
                                <EditOutlinedIcon/>
                            </IconButton>
                            <IconButton color="primary" aria-label="Editar Departamento" component="label">
                                <DeleteOutlineOutlinedIcon/>
                            </IconButton>    

                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
               
            </div>

            {/* Modal */}      
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                {/*Atributo size indica el tamaño del modal opciones:
                    "sm" "lg" "xl" (tamaño por defecto "medio" siempre que no se incluya la propiedad)
                */}
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Requistro de Departamentos</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <form action="">
                            <MDBInput
                                wrapperClass='mb-4 mt-2'  
                                label='Nombre del departamento' 
                                id='id-input-nombre-departamento' 
                                type='text' 
                            />
                            <MDBTextArea 
                                wrapperClass='mb-4' 
                                textarea
                                rows={4}
                                label='Descripción del departamento' 
                                id='id-input-descripcion-departamento' 
                                type='text' 
                            />
                        </form>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color='danger' onClick={toggleShow}>
                            Cerrar
                        </MDBBtn>
                        <MDBBtn>Registrar</MDBBtn>
                    </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default Areas;