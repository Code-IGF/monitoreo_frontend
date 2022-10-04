import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";
import TablaAreas from "./departamentos/TablaAreas";
import AlertDialogSlide from "../../components/AlertEliminar";
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
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CloseIcon from '@mui/icons-material/Close';


const Areas = ()=>{
    //Variables
    const [departamentos, setDepartamentos]=useState();
    const [nombreDepartamento, setNombreDepartamento]=useState("");
    const [descripcionDepartamento, setDescripcionDepartamento]=useState("");
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

    //Función para consultar departamentos de la empresa
    const consultarDepartamentos=()=>{
        http.get('/areas').then(
            (res)=>{
                setDepartamentos(res.data);
            }
        );
    }

    //Función para crear datos
    const almacenarDepartamento=()=>{    
        console.log(nombreDepartamento);
        console.log(descripcionDepartamento);
        console.log("enviar")
        http.post("/areas", {nombre: nombreDepartamento, descripcion:descripcionDepartamento}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            const nuevoDepartamento=departamentos;
            nuevoDepartamento.push(data.data);
            console.log(nuevoDepartamento);
        });
    }
    //Función editar datos
    const editarDepartamento=()=>{    
        console.log(nombreDepartamento);
        console.log(descripcionDepartamento);
        console.log("editar")
        http.put(`/areas/${seletDato.id}`, {nombre: nombreDepartamento, descripcion:descripcionDepartamento}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            setAcceptEdit(false);
            const nuevoDepartamento=departamentos.filter((item) => item !== seletDato);
            nuevoDepartamento.unshift(data.data);
            setDepartamentos(nuevoDepartamento);
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
        http.delete(`/areas/${seletDato.id}`).then(
            ()=>{
                console.log("se elimino "+seletDato.id)
                handleClose()//Cerrar modal
                setAcceptDelete(false)//Desactivar funcion de eliminacion
                const nuevoDepartamento=departamentos.filter((item) => item !== seletDato);
                setDepartamentos(nuevoDepartamento);
            }
          )
    }

    useEffect(()=>{
        acceptDelete? eliminarData(): console.log("accept (false)")
    },[acceptDelete]);

    //Ejecutando Funciones
    useEffect(()=>{
        consultarDepartamentos();
        // eslint-disable-next-line 
    },[]);

    ///Funciones para editar
    const selectEditData = (dato)=>{
        setAcceptEdit(true)//habilitar edicion
        setSeletDato(dato);//select dato
        console.log(dato.id);
        setNombreDepartamento(dato.nombre);
        setDescripcionDepartamento(dato.descripcion);
        toggleShow();
       
    }
    

    return(
      <div className="container pt-5">
        <div className="row">
            <div className="col">
                <h2>Administración de Departamentos</h2>
            </div>
            <div className="col text-end">
                {/*Boton para abrir modal*/}
                <Button 
                    variant="outlined" 
                    startIcon={<BusinessCenterIcon />}
                    onClick={toggleShow}
                    >
                    Registrar Departamento
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
                    <th scope="col">Nombre Departamento</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>                    
                <TablaAreas
                    setDeleteId={setDeleteId}
                    departamentos={departamentos}
                    handleClickOpen={handleClickOpen}
                    selectEditData={selectEditData}
                >
                </TablaAreas>
                </table>
        </div>

        {/**Dialog eliminiar */}
        <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            tipoElemento={"Departamento"}
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
                    <MDBModalTitle>Registrar nuevo Departamentos</MDBModalTitle>
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
                        label="Nombre de Departamento" 
                        variant="outlined" 
                        onChange={e=>setNombreDepartamento(e.target.value)} 
                        value={nombreDepartamento}
                        />
                    <TextField 
                        id="outlined-basic" 
                        fullWidth 
                        label="Descripción de Departamento" 
                        variant="outlined" 
                        multiline
                        margin="normal"
                        onChange={e=>setDescripcionDepartamento(e.target.value)} 
                        value={descripcionDepartamento}
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
                        onClick={acceptEdit? editarDepartamento: almacenarDepartamento}
                    >Enviar
                    </Button>
                </MDBModalFooter>

                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        

      </div>  
    );
}


export default Areas;