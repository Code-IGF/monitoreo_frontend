import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AuthUser from "../../components/AuthUser";
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



function Areas(){

    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    const {http}=AuthUser();

    const [nombre, setNombre]=useState();
    const [descripcion, setDescripcion]=useState();
    const [datos, setDatos]=useState();

    const [departamentos, setDepartamentos]=useState();

    const consultarDepartamentos = ()=>{
        http.get('/areas').then(
            (res)=>{
                //console.log(res.data);
                setDepartamentos(res.data);
            }
        );
    }
    const consultar = ()=>{
        http.get('/areas/1').then(
            (res)=>{
                //console.log(res.data);
                setDatos(res.data);
            }
        );
    }
    useEffect(()=>{
        //consultar();
        consultarDepartamentos();
    },[]);

    ///Si envia los datos 
    const submitForm=()=>{
        console.log(nombre);
        console.log(descripcion);
        console.log("enviar")
        http.post("/areas", {nombre: nombre, descripcion:descripcion}).then((data)=>{
            console.log(data.data)
            setBasicModal(false);
            setDepartamentos(departamentos.push(data.data));

        });
    }

    function renderElement(){
        if(departamentos){

            return(
                <tbody>
                    {
                        departamentos.map(x => (<tr key={x.id}>
                            <th scope="row">{x.id}</th>
                            <td>{x.nombre}</td>
                            <td>Otto</td>
                            <td>{x.created_at}</td>
                            <td><EditOutlinedIcon></EditOutlinedIcon></td> 

                        </tr>))
                    }
                 {/*  <th scope="row">{datos.id}</th>
                  <td>{datos.nombre}</td>
                  <td>Otto</td>
                  <td>{datos.created_at}</td>
                  <td><EditOutlinedIcon></EditOutlinedIcon></td> */}
                </tbody>
            )
        }
        else{
            return(
                <tbody>
                    <tr><td colSpan={5}>No hay registros de Departamentos en la empresa.</td></tr>
                </tbody>

            )
        }
    }

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
                                <span className="pe-4">
                                    <BusinessCenterIcon></BusinessCenterIcon>
                                </span> Agregar Departamento
                            </div>
                        </MDBBtn>
                    </div>
                   <div className="pt-5">
                    {/*Tabla*/}
                    <table className="table table-hover table-bordered text-center">
                        <thead className='table-primary'>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Departamento</th>
                            <th scope="col">Supervisor</th>
                            <th scope="col">Fecha de Creación</th>
                            <th scope="col">Opciones</th>
                            </tr>
                        </thead>

                            {renderElement()}
                            

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
                                onChange={e=>setNombre(e.target.value)} 
                            />
                            
                                            </form>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color='danger' onClick={toggleShow}>
                            Cerrar
                        </MDBBtn>
                        <MDBBtn onClick={submitForm}>Registrar</MDBBtn>
                    </MDBModalFooter>

                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    );
}

export default Areas;