import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";

//Icono
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CloseIcon from '@mui/icons-material/Close';

//
import { 
    Button,
    TextField, 
    Divider,
    InputLabel,
    MenuItem,
    Select,
    FormControl 
 } from '@mui/material';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
  } from 'mdb-react-ui-kit';
//Elmentos
import Paginate from '../../components/paginacion';
import TeblaUsuarios from './GestionDeUsuarios/TablaUsuarios';

function GestionDeUsuario(){
    //Variable
    const [usuarios, setUsuarios] =useState();
    const [nombreUsuario, setNombreUsuario]=useState();
    const [descripcionUsuario, setDescripcionUsuario]=useState();
    const [rolUsuario, setRolUsuario] = useState('');

    const handleChangeRol = (event) => {
        setRolUsuario(event.target.value);
    };

    const [basicModal, setBasicModal] =useState(false);
    const toggleShow = () => {setBasicModal(!basicModal);}

     //Paginación
     const [siguiente, setSiguiente]=useState();
     const [anterior, setAnterior]=useState();
     const [actual, setActual]=useState();
     const [final, setFinal]=useState();

    //http
    const {http}=AuthUser();
 
    //Funcion para consultar usuario
    const consultarUsuarios=(url)=>{
        http.get(url).then(
            (res)=>{
                console.log("consultando")
                setActual(res.data.current_page);
                setAnterior(res.data.prev_page_url);
                setSiguiente(res.data.next_page_url);
                setFinal(res.data.last_page);
                setUsuarios(res.data.data);
            }
        );
    }
    //Ejecutando funciones iniciales
    useEffect(()=>{
        consultarUsuarios('/usuarios/paginacion');
        // eslint-disable-next-line 
    },[]);

    //-------------------------------------------------------------------------------------------*/
    const [seletDato, setSeletDato]=useState(); //alamcena el objeto seleccionado
    const setDeleteId = (dato)=>{
        setSeletDato(dato);
        //handleClickOpen();//Se abre el modal de confirmación
    }

    //-------------------------------------------------------------------------------------------*/

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
                {/* invacando Componente */}
                <TeblaUsuarios
                    setDeleteId={setDeleteId}
                    usuarios={usuarios}
                    //handleClickOpen={handleClickOpen}
                    //selectEditData={selectEditData}
                />

                {/* Paginación*/}
                <Paginate
                    consultarData={consultarUsuarios}
                    paginaActual={actual}
                    paginaFinal={final}
                    anterior={anterior}
                    siguiente={siguiente}
                    baseUrl={"/usuarios/paginacion?page="}
                >
                </Paginate>
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
                                id="input-name" 
                                fullWidth 
                                label="Nombre" 
                                variant="outlined" 
                                onChange={e=>setNombreUsuario(e.target.value)} 
                                />
                            <TextField 
                                id="input_email" 
                                fullWidth 
                                label="Correo Electronico" 
                                type="email"
                                variant="outlined" 
                                margin="normal"
                                onChange={e=>setDescripcionUsuario(e.target.value)} 
                                />
                            <TextField 
                                id="input-password" 
                                fullWidth 
                                label="Contraseña" 
                                type="password"
                                variant="outlined" 
                                margin="normal"
                                onChange={e=>setDescripcionUsuario(e.target.value)} 
                                />
                            <FormControl 
                                fullWidth
                                margin="normal"
                                >
                                <InputLabel  
                                    id="label-select-rol"
                                    >Rol del Empleado
                                </InputLabel>
                                <Select
                                    fullWidth
                                    labelId="label-select-rol"
                                    id="select-rol"
                                    value={rolUsuario}
                                    label="Rol del Empleado"
                                    onChange={handleChangeRol}

                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>                            
                            {/* Input para subir imagen */}
                            <div class="mb-3 mt-3">
                                <label for="formFileSm" class="form-label">Foto del Empleado.</label>
                                <Divider className='mb-3'/>
                                <input 
                                    class="form-control form-control-sm" 
                                    id="formFileSm" 
                                    type="file"
                                />
                            </div>
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