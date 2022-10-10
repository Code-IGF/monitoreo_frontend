import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AuthUser from "../../../components/AuthUser";
import TablaEquipos from "./TablaEquipos";
import AlertDialogSlide from "../../../components/AlertEliminar";
import FormEquipos from "./FormEquipos";
//
import { Button, 
    
 } from "@mui/material";

//Iconos
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const GestionDeEquipo = ()=>{
    //Variables
    const [nombreEquipo, setNombreEquipo]=useState("");
    const [descripcionEquipo, setDescripcionEquipo]=useState("");
    const [areaEquipo, setAreaEquipo]=useState("");
    //Use state para confirmar eliminacion
    const [acceptDelete, setAcceptDelete]=useState(false);
    //use State para confirmar que es edición
    const [acceptEdit, setAcceptEdit]=useState(false);

    //Consultas iniciales
    const [roles, setRoles]=useState();
    const [areas, setAreas]=useState();

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
    const consultarAreas=()=>{
        http.get('/areas').then(
            (res)=>{
                setAreas(res.data);
            }
        );
    }






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

        console.log("enviar")
        http.post("/gestionDeEquipo", {nombre: "", descripcion:""}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            const nuevoRol=roles;
            nuevoRol.push(data.data);
            console.log(nuevoRol);
        });
    }
      //Función editar datos
      const editarRol=()=>{    

        console.log("editar")
        http.put(`/EquipoDeEquipo/${seletDato.id}`, {nombre: "", descripcion:""}).then((data)=>{
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
        consultarAreas();
        // eslint-disable-next-line 
    },[]);

    ///Funciones para editar
    const selectEditData = (dato)=>{
        setAcceptEdit(true)//habilitar edicion
        setSeletDato(dato);//select dato
        console.log(dato.id);
        
        toggleShow();
       
    }
    return(
        <div className="container pt-5">
          <div className="row">
              <div className="col">
                  <h2>Administración de Equipos</h2>
              </div>
              <div className="col text-end">
                  {/*Boton para abrir modal*/}
                  <Button 
                      variant="outlined" 
                      startIcon={<GroupAddIcon/>}
                      onClick={toggleShow}
                      >
                      Crear nuevo Equipo
                  </Button>
              </div>
          </div>
        {/*Tabla*/}    
        <TablaEquipos
            setDeleteId={setDeleteId}
            roles={roles}
            handleClickOpen={handleClickOpen}
            selectEditData={selectEditData}
            http={http}
        >
        </TablaEquipos>
        {/**Dialog eliminiar */}
        <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            tipoElemento={"Rol de Equipo"}
            setAcceptDelete={setAcceptDelete}
        >
        </AlertDialogSlide>

        {/*Modal*/}
        <FormEquipos
            verModal={toggleShow} 
            basicModal={basicModal}
            setBasicModal={setBasicModal}
            nombreEquipo={nombreEquipo}
            setNombreEquipo={setNombreEquipo}
            descripcionEquipo={descripcionEquipo}
            setDescripcionEquipo={setDescripcionEquipo}
            areas={areas}
            areaEquipo={areaEquipo}
            setAreaEquipo={setAreaEquipo}

        >

        </FormEquipos>
            
    
          </div>  
        );
    }
    
    
    export default GestionDeEquipo;