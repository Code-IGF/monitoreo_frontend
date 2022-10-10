import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AuthUser from "../../../components/AuthUser";
import TablaRoles from "./TablaRoles";
import AlertDialogSlide from "../../../components/AlertEliminar";
//
import { Button, 
    TextField
 } from "@mui/material";

import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

//Iconos
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CloseIcon from '@mui/icons-material/Close';

const GestionDeEquipo = ()=>{
    //Variables
    const [roles, setRoles]=useState();
    const [nombreRol, setNombreRol]=useState("");
    const [descripcionRol, setDescripcionRol]=useState("");
    //Use state para confirmar eliminacion
    const [acceptDelete, setAcceptDelete]=useState(false);
    //use State para confirmar que es edición
    const [acceptEdit, setAcceptEdit]=useState(false);

    const [basicModal, setBasicModal] = useState();
    const toggleShow = () => {
        setBasicModal(!basicModal);}
    
    //Abrir dialog delete
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }; 
       //http
       const {http}=AuthUser();

       //Función para consultar rol de la empresa
       const consultarRoles=()=>{
           http.get('/gestionDeEquipo').then(
               (res)=>{
                   setRoles(res.data);
               }
           );
       }
       //Función para crear datos
       const almacenarRoles=()=>{    
        console.log(nombreRol);
        console.log(descripcionRol);
        console.log("enviar")
        http.post("/gestionDeEquipo", {nombre: nombreRol, descripcion:descripcionRol}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            const nuevoRol=roles;
            nuevoRol.push(data.data);
            console.log(nuevoRol);
        });
    }
      //Función editar datos
      const editarRol=()=>{    
        console.log(nombreRol);
        console.log(descripcionRol);
        console.log("editar")
        http.put(`/EquipoDeEquipo/${seletDato.id}`, {nombre: nombreRol, descripcion:descripcionRol}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            setAcceptEdit(false);
            const nuevoRol=roles.filter((item) => item !== seletDato);
            nuevoRol.unshift(data.data);
            setRoles(nuevoRol);
        });
    }
        //-----------------------------------------------------------------------------------------
    //Funciones para eliminar
    const [seletDato, setSeletDato]=useState(); //alamcena el id a eliminar
    //Si se preciona un boton de eliminar se recibe su id y asigna a idDelete
    const setDeleteId = (dato)=>{
        setSeletDato(dato);
        handleClickOpen();//Se abre el modal de confirmación
    }
    const eliminarData=()=>{
        http.delete(`/gestionDeEquipo/${seletDato.id}`).then(
            ()=>{
                console.log("se elimino "+seletDato.id)
                handleClose()//Cerrar modal
                setAcceptDelete(false)//Desactivar funcion de eliminacion
                const nuevoRol=roles.filter((item) => item !== seletDato);
                setRoles(nuevoRol);
            }
          )
    }

    useEffect(()=>{
        acceptDelete? eliminarData(): console.log("accept (false)")
        // eslint-disable-next-line 
    },[acceptDelete]);

    //Ejecutando Funciones
    useEffect(()=>{
        consultarRoles();
        // eslint-disable-next-line 
    },[]);

    ///Funciones para editar
    const selectEditData = (dato)=>{
        setAcceptEdit(true)//habilitar edicion
        setSeletDato(dato);//select dato
        console.log(dato.id);
        setNombreRol(dato.nombre);
        setDescripcionRol(dato.descripcion);
        toggleShow();
       
    }
    return(
        <div className="container pt-5">
          <div className="row">
              <div className="col">
                  <h2>Administración de Roles</h2>
              </div>
              <div className="col text-end">
                  {/*Boton para abrir modal*/}
                  <Button 
                      variant="outlined" 
                      startIcon={<GroupAddIcon/>}
                      onClick={toggleShow}
                      >
                      Registrar Rol
                  </Button>
              </div>
          </div>
          {/*Tabla*/}
          <div className="pt-5">
              {/*Tabla*/}
              <table className="table table-hover table-bordered text-center">
                  <thead className='table-primary'>
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre Rol</th>
                      <th scope="col">Descripción Rol</th>
                      <th scope="col">Fecha de Creación</th>
                      <th scope="col">Opciones</th>
                      </tr>
                  </thead>         
                  <TablaRoles
                    setDeleteId={setDeleteId}
                    roles={roles}
                    handleClickOpen={handleClickOpen}
                    selectEditData={selectEditData}
                >
                </TablaRoles>
                </table>
        </div>

        {/**Dialog eliminiar */}
        <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            tipoElemento={"Rol de Equipo"}
            setAcceptDelete={setAcceptDelete}
        >
        </AlertDialogSlide>

        {/*Modal*/}
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            {/*Atributo size indica el tamaño del modal opciones:
                "sm" "lg" "xl" (tamaño por defecto "medio" siempre que no se incluya la propiedad)
            */}
            <MDBModalDialog size="lg">
                <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>Registrar nuevo Rol de Equipo</MDBModalTitle>
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
                        label="Nombre del Rol" 
                        variant="outlined" 
                        onChange={e=>setNombreRol(e.target.value)} 
                        value={nombreRol}
                        />
                    <TextField 
                        id="outlined-basic" 
                        fullWidth 
                        label="Descripción del Rol" 
                        variant="outlined" 
                        multiline
                        margin="normal"
                        onChange={e=>setDescripcionRol(e.target.value)} 
                        value={descripcionRol}
                        rows={3}
                        />
                </MDBModalBody>

                <MDBModalFooter>
                    <Button 
                        variant="text" 
                        color="error"
                        onClick={()=>{
                            setAcceptEdit(false)
                            toggleShow()
                        }}
                        >Cerrar
                        </Button>
                        <Button 
                            variant="text" 
                            onClick={acceptEdit? editarRol: almacenarRoles}
                        >Enviar
                        </Button>
                    </MDBModalFooter>
    
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
            
    
          </div>  
        );
    }
    
    
    export default GestionDeEquipo;