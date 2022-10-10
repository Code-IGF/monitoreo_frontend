import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";
import { useRef } from 'react';

//Icono
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

//
import { 
    Button
 } from '@mui/material';

//Elmentos
import Paginate from '../../components/paginacion';
import TeblaUsuarios from './GestionDeUsuarios/TablaUsuarios';
import AlertDialogSlide from '../../components/AlertEliminar';
import RegistroUsuario from './GestionDeUsuarios/RegistroUsuario';

const fileInitial={
    archivo:null,
    archivoNombre:""
}

function GestionDeUsuario({baseURL}){
    //Variable
    const [usuarios, setUsuarios] =useState();
    const [nombreUsuario, setNombreUsuario]=useState("");
    const [emailUsuario, setEmailUsuario]=useState("");
    const [passwordUsuario, setPasswordUsuario]=useState("");
    const [rolUsuario, setRolUsuario]=useState(0);
    const [imagenUsuario, setImagenUsuario]=useState(fileInitial);
    const [fechaNacimiento, setFechaNacimiento]=useState("");

    //file Ref
    const fileRef = useRef(null)

    //Roles para consultar
    const [roles, setRoles]=useState();

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
            archivoNombre:e.target.files[0].name,
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
            setBasicModal(false);
            const nuevoUsuario=usuarios;
            nuevoUsuario.push(data.data);
            setNombreUsuario("");
            setEmailUsuario("");
            setPasswordUsuario("");
            setRolUsuario(0);
            setFechaNacimiento("");
            setImagenUsuario(fileInitial);
            fileRef.current.value="";
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
    const setDeleteId = (dato)=>{
        setSelectDato(dato);
        handleClickOpen();//Se abre el modal de confirmación
    }
    const eliminarData=()=>{
        http.delete(`/user/delete/${selectDato.id}`).then(
            (response)=>{
                console.log(response.data)
                handleClose()//Cerrar modal
                setAcceptDelete(false)//Desactivar funcion de eliminacion
                if(response.data === 'success'){
                    consultarUsuarios('/usuarios/paginacion');
                }
                
            }
            )
    }
    useEffect(()=>{
        acceptDelete? eliminarData(): console.log("accept (false)");
        // eslint-disable-next-line
    },[acceptDelete]);

    //-------------------------------------------------------------------------------------    
    //Editar datos
    const [selectDato, setSelectDato]=useState(); //alamcena el objeto seleccionado
    const [habilitarEdicion, setHabilitarEdicion]=useState(false);
    const selectEditData = (data)=>{
        setHabilitarEdicion(true);
        setSelectDato(data);
        setNombreUsuario(data.name)
        setEmailUsuario(data.email)
        setFechaNacimiento(data.fecha_nacimiento)
        //Si existe el rol
        data.roles[0]? 
            setRolUsuario(data.roles[0].id)
            :
            setRolUsuario(0)
        //habilitando la edición

        console.log("abrir edit")
        toggleShow();
    }

    const editarUsuario=()=>{    
        console.log("editando datos")
        const formData=new FormData();
        formData.append('name', nombreUsuario)
        formData.append('email', emailUsuario)
        formData.append('password', passwordUsuario)
        formData.append('rol', rolUsuario)
        formData.append('fecha_nacimiento', fechaNacimiento)
        imagenUsuario.archivo?
        formData.append('imagen', imagenUsuario.archivo, imagenUsuario.archivoNombre)
        :
        formData.append('imagen','')
        http.post(`/user/edit/${selectDato.id}`, formData).then((data)=>{
            setBasicModal(false);
            consultarUsuarios('/usuarios/paginacion');
            setNombreUsuario("");
            setEmailUsuario("");
            setPasswordUsuario("");
            setRolUsuario(0);
            setFechaNacimiento("");
            setImagenUsuario(fileInitial);
            fileRef.current.value="";
        });
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
                            onClick={()=>{
                                toggleShow();
                                setHabilitarEdicion(false);
                                setNombreUsuario("");
                                setEmailUsuario("");
                                setPasswordUsuario("");
                                setFechaNacimiento("");
                                setRolUsuario(0);
                            }}
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
                    selectEditData={selectEditData}
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
            <RegistroUsuario
                verModal={toggleShow} 
                setNombreUsuario={setNombreUsuario}
                setEmailUsuario={setEmailUsuario} 
                setPasswordUsuario={setPasswordUsuario}
                setFechaNacimiento={setFechaNacimiento}
                setRolUsuario={setRolUsuario}
                fileSelect={fileSelect}
                registrarUsuario={registrarUsuario}
                rolUsuario={rolUsuario}
                roles={roles}
                fechaNacimiento={fechaNacimiento}
                PasswordUsuario={passwordUsuario}
                emailUsuario={emailUsuario}
                nombreUsuario={nombreUsuario}
                basicModal={basicModal}
                setBasicModal={setBasicModal}
                habilitarEdicion={habilitarEdicion}
                editarUsuario={editarUsuario}
                fileRef={fileRef}
            >
            </RegistroUsuario>

        </div>
    );
}
export default GestionDeUsuario;