
import img from '../../img/profile.png';
import { useState, useEffect, useRef } from 'react';
import AuthUser from "../../components/AuthUser";

import { 
    Button,
    Alert
} from '@mui/material';

import {
    MDBInputGroup
  } from 'mdb-react-ui-kit';


const fileInitial={
    archivo:null,
    archivoNombre:""
}

function PerfilUsuario({baseURL}) {
    const [nombreUser, setNombreUser]=useState("");
    const [fechaUser, setFechaUser]=useState("");
    const [emailUser, setEmail]=useState("");
    const [imagenUsuario, setImagenUsuario]=useState(fileInitial);
    const [imagenUrlUser, setImagenUrlUser]=useState("")
    const [successEdit, setSuccessEdit]=useState(false);
    const [invalidData, setInvalidData]=useState(false);
    const [invalidMessage, setInvalidMessage]=useState(false);
    const {http}=AuthUser();
    const fileRef = useRef(null)

    //Se ejecuta cuando se selecciona un archivo (imagen)
    const fileSelect=(e)=>{
        setImagenUsuario({
            archivo: e.target.files[0],
            archivoNombre:e.target.files[0].name,
        });

    }

    const consultarUsuario=()=>{
        http.post('/me').then((data)=>{
            setNombreUser(data.data.name);
            setFechaUser(data.data.fecha_nacimiento);
            setEmail(data.data.email);
            setImagenUrlUser(data.data.imagen)
        });
    }

    const editarUsuario=()=>{    
        setSuccessEdit(false);
        const formData=new FormData();
        formData.append('name', nombreUser)
        formData.append('email', emailUser)
        formData.append('fecha_nacimiento', fechaUser)
        imagenUsuario.archivo?
        formData.append('imagen', imagenUsuario.archivo, imagenUsuario.archivoNombre)
        :
        formData.append('imagen','')
        http.post("me/edit", formData).then((data)=>{
            //Si hay un dato invalido
            if(data.data.type){
                setInvalidData(true);
                setInvalidMessage(data.data.message)
            }
            if(data.data==="success"){
                setImagenUsuario(fileInitial);
                fileRef.current.value="";
                setSuccessEdit(true);
                consultarUsuario();
            }
        });
    }

    useEffect(()=>{
        consultarUsuario();
        // eslint-disable-next-line 
    },[]);

    return (
        <div
      style={{
        backgroundColor: '#F5F5F5',
       
        
      }}
    >
            <div className="container pt-5 d-grid gap-3 " >  
              
                <div className=" align-items-center" id="cuadro_Datos_Usuario">
                        {/*Datos de usuario*/}
                        <div className='w-100 text-center py-4'>
                                <h2 className="fw-normal ">Perfil de Usuario</h2>
                        </div>
                        <form className="p-4">  
                            <div className="col-12 bg d-none d-md-block" >
                                <div className="row">
                                    <div className="col-8 bg d-none d-md-block">
                                        <div className="m-3">
                                            <MDBInputGroup   textBefore='Nombre:' textClass='bg-white' noBorder label='' id='formControlLg' >
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
                                            <MDBInputGroup   textBefore='Fecha de nacimiento:' textClass='bg-white' noBorder label='' id='formControlLg' >
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
                                            <MDBInputGroup   textBefore='Correo:' textClass='bg-white' noBorder label='' id='formControlLg' >
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
                                                onClick={editarUsuario}
                                            >
                                                Actualizar Perfil
                                            </Button>
                                        </div> 
                                        {
                                            successEdit?
                                                <Alert severity="success">Perfil Modificado</Alert>
                                                :
                                                ""
                                        }
                                        {
                                            invalidData? 
                                                <div className='pb-4'>
                                                    <Alert severity="error">{invalidMessage}</Alert>
                                                </div>
                                                :
                                                ""
                                        } 
                                        
                                    </div> 
                                    <div className="col-4 bg d-none d-md-block" >
                                        <div className='img-holder'align="center">
                                            {imagenUrlUser?
                                                <img src={`${baseURL}${imagenUrlUser}`} width="150" height="150"alt='Imagen de Perfil'/>
                                                :
                                                <img src={img} width="150" height="150"alt='Imagen de Perfil'/>
                                            }
                                            
                                        </div>
                                    
                                        <div className='w-100  py-4 ' align="center" >
                                        {/* Input para subir imagen */}
                                        <div className="m-3">
                                            <label htmlFor="formFileSm" className="form-label">Modificar Foto.</label>
                                            <input 
                                                ref={fileRef}
                                                className="form-control form-control-sm" 
                                                id="formFileSm" 
                                                type="file"
                                                onChange={fileSelect}
                                            />
                                        </div>

                                        </div>
                                    </div>  
                                </div>
                            </div>  
                        </form>
                                  
                </div>           
                    
                 
            </div>
            </div>                               
        
    );


}
export default PerfilUsuario;