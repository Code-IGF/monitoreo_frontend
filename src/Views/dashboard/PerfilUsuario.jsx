
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import img from '../../img/profile.png';
import { useState, useEffect } from 'react';
import AuthUser from "../../components/AuthUser";

import { Button } from '@mui/material';

import {
    MDBInputGroup
  } from 'mdb-react-ui-kit';



function PerfilUsuario({baseURL}) {
    const [nombreUser, setNombreUser]=useState("");
    const [fechaUser, setFechaUser]=useState("");
    const [emailUser, setEmail]=useState("");
    const [imagenUser, setImagenUser]=useState("")
    const {http}=AuthUser();

    const consultarUsuario=()=>{
        http.post('/me').then((data)=>{
            setNombreUser(data.data.name);
            setFechaUser(data.data.fecha_nacimiento);
            setEmail(data.data.email);
            setImagenUser(data.data.imagen)
        });
    }

    useEffect(()=>{
        consultarUsuario();
        // eslint-disable-next-line 
    },[]);

    return (
        
            <div className="container mt-5" style={{
                backgroundColor: '#E3ECEE'
                
                 ,  
              }}>  
              
                <div className="row shadow rounded align-items-center" id="cuadro_Datos_Usuario">
                        {/*Datos de usuario*/}
                        <div className='w-100 text-center py-4'>
                                <h2 className="fw-normal ">Perfil de Usuario</h2>
                        </div>
                        <form className="p-4">  
                            <div className="col-12 bg d-none d-md-block" >
                                <div className="row">
                                    <div className="col-8 bg d-none d-md-block">
                                        <div className="m-3">
                                            <MDBInputGroup   textBefore='Nombre:' noBorder label='' id='formControlLg' >
                                                <input 
                                                    className='form-control rounded '  
                                                    type='name' 
                                                    value={nombreUser}
                                                    onChange={(event)=>{
                                                        setNombreUser(event.target.value)
                                                    }}
                                                />
                                            </MDBInputGroup>
                                        </div>
                                        {/* <div className="m-3">
                                            <MDBInputGroup   textBefore='Apellido:' noBorder label='' id='formControlLg'  >
                                             <input className='form-control rounded' type='name' />
                                            </MDBInputGroup>
                                        </div> */}
                                        <div className="m-3">
                                            <MDBInputGroup   textBefore='Fecha de nacimiento:' noBorder label='' id='formControlLg' >
                                                <input 
                                                    className='form-control rounded' 
                                                    type='date' 
                                                    value={fechaUser}
                                                    onChange={(event)=>{
                                                        setFechaUser(event.target.value)
                                                    }}
                                                    />
                                            </MDBInputGroup>
                                        </div>
                                        
                                        <div className="m-3">
                                            <MDBInputGroup   textBefore='Correo:' noBorder label='' id='formControlLg' >
                                                <span className="input-group-text bg-white rounded" id="basic-addon1">@</span>
                                                <input 
                                                    className='form-control rounded' 
                                                    type='email' 
                                                    value={emailUser}
                                                    onChange={(event)=>{
                                                        setEmail(event.target.value)
                                                    }}
                                                    />
                                            </MDBInputGroup>
                                        </div>
                                        {/* <div className="m-3">
                                            <MDBInputGroup   textBefore='Contraseña:' noBorder label='' id='formControlLg' >
                                                
                                                <span className="input-group-text bg-white rounded" id="key"><LockIcon></LockIcon></span>
                                                <input className='form-control rounded' type='password' />
                                            </MDBInputGroup>
                                        </div> */}
                                        <div className='w-100  py-3 ' align="right" >
                                            <Button
                                                variant="outlined" 
                                                color="primary"
                                            >
                                                Actualizar Perfil
                                            </Button>
                                        </div>  
                                        
                                    </div> 
                                    <div className="col-4 bg d-none d-md-block" >
                                        <div className='img-holder'align="center">
                                            {imagenUser?
                                                <img src={`${baseURL}${imagenUser}`} width="150" height="150"alt='Imagen de Perfil'/>
                                                :
                                                <img src={img} width="150" height="150"alt='Imagen de Perfil'/>
                                            }
                                            
                                        </div>
                                    
                                        <div className='w-100  py-4 ' align="center" >
                                        <button type="button" className="btn btn-outline-primary">Modificar Foto   <PhotoCameraIcon></PhotoCameraIcon></button>

                                        </div>
                                    </div>  
                                </div>
                            </div>  
                        </form>
                                  
                </div>           
                    
                 
            </div>

        
    );


}
export default PerfilUsuario;