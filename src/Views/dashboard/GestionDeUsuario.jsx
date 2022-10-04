import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";

//Icono
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

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


 {/*_______________________________________________________________________________________________*/}
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
                console.log(res.data);
                setUsuarios(res.data);
            }
        );
    }
    //Ejecutando funciones
    useEffect(()=>{
        consultarUsuarios();
    },[]);


 {/*_______________________________________________________________________________________________*/}
    //Renderizar elementos iniciales
    function renderizarTabla(){
        if(usuarios){
            return(
            <tbody>
                {usuarios.map(x=>(
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.nombre}</td>
                        <td>{x.created_at}</td>
                        <td>
                            <EditOutlinedIcon>
                            </EditOutlinedIcon>
                        </td>
                    </tr>
                ))}        
            </tbody>
            )
        }else{
            return(
            <tbody>
                <tr>
                    <td colSpan={7}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </td>
                </tr>
            </tbody>
            )
        }
    }


 {/*_______________________________________________________________________________________________*/}
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
            

 {/*_______________________________________________________________________________________________*/}
            {/* Tabla  */}
            <div className="container pt-5">
                <table class="table table-hover table-bordered">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col"> Nombre &nbsp; &nbsp; &nbsp; &nbsp; Apellido</th>
                            <th scope="col">Area</th>
                            <th scope="col">Equipo</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Fecha de Registro</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {/* invacando función */
                        renderizarTabla()
                    }
                </table>
            </div>

 {/*_______________________________________________________________________________________________*/}
               {/*
                //Prueba de paginación 
                <div className ="row">
                    <dv className="col text-end">
                        <Button
                            variant="outlined"
                            onClick={toggleShow}
                        >
                            <span aria-hidden="true">&lt; Prev</span>
                        </Button>
                       
                        <Button
                            variant="outlined"
                            onClick={toggleShow}
                        >
                            <span aria-hidden="true"> Next &gt;</span>
                        </Button>
                        
                    </dv>
                </div>
            */}
            
 {/*_______________________________________________________________________________________________*/}
                {/*Paginacion*/}
                <div className="container pt-5" >
                    <div className ="row">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&lt; Prev</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1 - 10</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"> Next &gt;</span>
                                    </a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">of 233</a></li>
                            </ul>
                        </nav>
                   </div>
                </div>
            
 {/*_______________________________________________________________________________________________*/}
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