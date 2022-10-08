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
import AlertDialogSlide from '../../components/AlertEliminar';

const fileInitial={
    archivo:null,
    archivoNombre:"",
    archivoURL: ""
}

function GestionDeUsuario({baseURL}){
    //Variable
    const [usuarios, setUsuarios] =useState();
    const [nombreUsuario, setNombreUsuario]=useState();
    const [emailUsuario, setEmailUsuario]=useState();
    const [passwordUsuario, setPasswordUsuario]=useState();
    const [rolUsuario, setRolUsuario]=useState(0);
    const [imagenUsuario, setImagenUsuario]=useState(fileInitial);
    const [fechaNacimiento, setFechaNacimiento]=useState("");

    //Roles para consultar
    const [roles, setRoles]=useState();

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
                console.log("consultando Usuarios")
                setActual(res.data.current_page);
                setAnterior(res.data.prev_page_url);
                setSiguiente(res.data.next_page_url);
                setFinal(res.data.last_page);
                setUsuarios(res.data.data);
            }
        );
    }
    //Función para consultar Roles
    const consultarRoles=()=>{
        http.get('/rol').then(
            (res)=>{
                console.log("consultando Roles");
                setRoles(res.data);
            }
        );
    }

    //Ejecutando funciones iniciales
    useEffect(()=>{
        consultarUsuarios('/usuarios/paginacion');
        consultarRoles();
        // eslint-disable-next-line 
    },[]);

    //Se ejecuta cuando se selecciona un archivo (imagen)
    const fileSelect=(e)=>{
        setImagenUsuario({
            archivo: e.target.files[0],
            archivoNombre:e.target.files[0].name
        });
    }

    const registrarUsuario=()=>{    
        const formData=new FormData();
        formData.append('imagen', imagenUsuario.archivo, imagenUsuario.archivoNombre)
        formData.append('name', nombreUsuario)
        formData.append('email', emailUsuario)
        formData.append('password', passwordUsuario)
        formData.append('rol', rolUsuario)
        formData.append('fecha_nacimiento', fechaNacimiento)
        console.log("enviando datos")
        http.post("/register", formData).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            const nuevoUsuario=usuarios;
            nuevoUsuario.push(data.data);
        });
    }

    //-------------------------------------------------------------------------------------------*/
    //Use state para confirmar eliminacion
    const [acceptDelete, setAcceptDelete]=useState(false);
    //Abrir dialog delete
    const [open, setOpen] = useState(false);
        const handleClickOpen = () => {
            setOpen(true);
        };
    const eliminarData=()=>{
        http.delete(`/user/delete/${seletDato.id}`).then(
            (response)=>{
                console.log(response.data)
                handleClose()//Cerrar modal
                setAcceptDelete(false)//Desactivar funcion de eliminacion
                if(response.data === 'success'){
                    const nuevosUsuarios=usuarios.filter((item) => item !== seletDato);
                    setUsuarios(nuevosUsuarios);
                }
                
            }
            )
    }
    useEffect(()=>{
        acceptDelete? eliminarData(): console.log("accept (false)");
        // eslint-disable-next-line
    },[acceptDelete]);

    
    const [seletDato, setSeletDato]=useState(); //alamcena el objeto seleccionado
    const setDeleteId = (dato)=>{
        setSeletDato(dato);
        handleClickOpen();//Se abre el modal de confirmación
    }
    const handleClose = () => {
        setOpen(false);
    }; 

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
                    baseURL={baseURL}
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
            {/**Dialog eliminiar */}
            <AlertDialogSlide
                open={open}
                handleClose={handleClose}
                tipoElemento={"Usuario"}
                setAcceptDelete={setAcceptDelete}
            >
            </AlertDialogSlide>     
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
                                onChange={e=>setEmailUsuario(e.target.value)} 
                                />
                            <TextField 
                                id="input-password" 
                                fullWidth 
                                label="Contraseña" 
                                type="password"
                                variant="outlined" 
                                margin="normal"
                                onChange={e=>setPasswordUsuario(e.target.value)} 
                                />
                            <input 
                                className='mb-3 mt-3 pb-3 pt-3 form-control'
                                type="date"
                                value={fechaNacimiento}
                                onChange={
                                    (e)=>{setFechaNacimiento(e.target.value)}
                                } 
                            />
                            {/*Select Roles --------------------------------------------------------------*/}
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
                                    {/*Llenando el select de Roles*/}
                                    {roles? 
                                        roles.map(rol=>(
                                            <MenuItem 
                                                key={rol.id} 
                                                value={rol.id}
                                            >{rol.name}
                                            </MenuItem>
                                        ))
                                        :
                                        <MenuItem value={0}>{"No se Registraron Roles"}</MenuItem>
                                    }
                                </Select>
                            </FormControl>                            
                            {/* Input para subir imagen */}
                            <div className="mb-3 mt-3">
                                <label htmlFor="formFileSm" className="form-label">Foto del Empleado.</label>
                                <Divider className='mb-3'/>
                                <input 
                                    className="form-control form-control-sm" 
                                    id="formFileSm" 
                                    type="file"
                                    onChange={fileSelect}
                                />
                            </div>
                        </MDBModalBody>



                        <MDBModalFooter>
                        <Button 
                            variant="text" 
                            color="error"
                            onClick={toggleShow}
                        >Cerrar
                        </Button>
                        <Button 
                            variant="text" 
                            onClick={registrarUsuario}
                        >Enviar
                        </Button>
                        </MDBModalFooter>


                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>

        </div>
    );
}
export default GestionDeUsuario;