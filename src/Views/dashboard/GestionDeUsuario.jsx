import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";

//Icono
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';

//
import { Button,TextField } from '@mui/material';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

function GestionDeUsuario(){
    //Variable
    const [usuarios, setUsuarios] =useState();
    const [nombreUsuario, setNombreUsuario]=useState();
    const [descripcionUsuario, setDescripcionUsuario]=useState();
    const [basicModal, setBasicModal] =useState(false);
    const toggleShow = () => {setBasicModal(!basicModal);}

    //http
    const {http}=AuthUser();

    //Funcion para consultar usuario
    const consultarUsuarios=()=>{
        http.get('/usuarios').then(
            (res)=>{
                setUsuarios(res.data);
            }
        );
    }
    //Ejecutando funciones
    useEffect(()=>{
        consultarUsuarios();
    },[]);

    return (
        <div>
            <div className="container pt-5" >
                <div className ="row">
                    <div className="col">
                        <h2>Administracion de Usuario</h2>
                    </div>
                    <div className="col text-end">
                        {/*Boton para abrir modal*/}
                        <Button 
                            variant="outlined" 
                            startIcon={<PersonAddAltIcon />}
                            onClick={toggleShow}
                        >
                                Crear Usuario
                        </Button>
                    </div>
                </div>
            </div>
            
            {/* Tabla  */}
            <div className="container pt-5">
                <table class="table table-hover table-bordered">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre  Apellido</th>
                            <th scope="col">Area</th>
                            <th scope="col">equipo</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    {/* Llenado de la Tabla */} 
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Katya Raymundo</td>
                            <td>Desarrollo</td>
                            <td> - </td>
                            <td>Isai Ronaldo</td>
                            <td>1/10/2022</td>
                            <td><MoreVertIcon></MoreVertIcon></td>
                        </tr>
                    </tbody>
                    
                </table>
            
            </div>
            {/* Modal */}
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                {/*Atributo size indica el tamaño del modal opciones:
                    "sm" "lg" "xl" (tamaño por defecto "medio" siempre que no se incluya la propiedad)
                */}
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Formulario para Registro de Empleado</MDBModalTitle>
                                <Button 
                                    variant="text" 
                                    startIcon={<CloseIcon />}
                                    onClick={toggleShow}
                                >
                                </Button>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="Nombre" 
                                variant="outlined" 
                                onChange={e=>setUsuarios(e.target.value)} 
                                />
                            <TextField 
                                id="outlined-basic" 
                                fullWidth 
                                label="Apellido" 
                                variant="outlined" 
                                multiline
                                margin="normal"
                                onChange={e=>setDescripcionUsuario(e.target.value)} 
                                rows={3}
                                />
                        </MDBModalBody>
{/* 
                        <MDBModalFooter>
                        <Button 
                            variant="text" 
                            color="error"
                            onClick={toggleShow}
                        >Cerrar
                        </Button>
                        <Button 
                            variant="text" 
                            onClick={almacenarDepartamento}
                        >Enviar
                        </Button>
                        </MDBModalFooter>
*/}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </div>
    );
}
export default GestionDeUsuario;