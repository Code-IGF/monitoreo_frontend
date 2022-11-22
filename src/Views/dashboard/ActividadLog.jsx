import img from '../../img/profile.png';
import AuthUser from "../../components/AuthUser";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {

    MDBInputGroup
  } from 'mdb-react-ui-kit';

  import { 
    Button,
    Alert,
    TextField
} from '@mui/material';
  import React, { useState, useEffect } from 'react';
import { CompressOutlined } from '@mui/icons-material';

  const fileInitial={
    archivo:null,
    archivoNombre:""
}

function ActividadLog({baseURL}){
    
    
    const [nombreUser, setNombreUser]=useState("");
    const [imagenUrlUser, setImagenUrlUser]=useState("");
    const [rolUser, setRolUser]=useState("");
    const [equipoUser, setEquipoUser]=useState("");
    const [fechaUser, setFechaUser]=useState("");
    const [imagenUsuario, setImagenUsuario]=useState(fileInitial);
    
    const [usuario, setUsuario]=useState("");
    const {http}=AuthUser();
    const navigate=useNavigate();
    const {idUsuario}=useParams();
  

    //Se ejecuta cuando se selecciona un archivo (imagen)
    /* const fileSelect=(e)=>{
        setImagenUsuario({
            archivo: e.target.files[0],
            archivoNombre:e.target.files[0].name,
        });

    }
    /*const consultarUsuario=()=>{
      http.get(`/usuarios/${idUsuario}`).then((data)=>{
          console.log(data.data)
          setNombreUser(data.name);
          setImagenUrlUser(data.imagen) 
      });
  }*/
  const consultarUsuario=()=>{
    http.get(`/usuarios/${idUsuario}`).then(
        (res)=>{
          console.log(res.data)
            setUsuario(res.data);
            setNombreUser(res.data.name);
            setImagenUrlUser(res.data.imagen);
            setRolUser(res.data.roles[0].name);
            
            if(res.data.equipo.length==0){
              setEquipoUser('Sin Equipo');
            }
            else{
              setEquipoUser(res.data.equipo[0].nombre);
              
            }
            
        }
    );
}

  
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
    useEffect(()=>{
      console.log("consultando")
      if(idUsuario){
          consultarUsuario();
         
      }
      
      
  },[]);


    return(
        
            <div
          style={{
            backgroundColor: '#F5F5F5',
           
            
          }}
        >
      <div>
        <div className="container pt-5 d-grid gap-1 ">
          <div className="row m-3">
              <div className="col">
                  <h2>Log de actividades de usuario</h2>
              </div>

              <div className="col text-end">
                  
              </div>
          </div>
          <div className="row m-3"  align="center" style={{
                backgroundColor: 'white'
                
                 ,  
              }}>
              <div className="col">
              <div className='img-holder m-3'align="left">
                    {imagenUrlUser?
                    <img src={`${baseURL}${imagenUrlUser}`} width="150" height="150"alt='Imagen de Perfil'/>
                    :
                    <img src={img} width="100" height="100"alt='Imagen de Perfil'/>
                    }
                                            
                </div>   
              </div>
              <div className="col m-3" >
                
              <MDBInputGroup   textBefore='Nombre:' textClass='bg-white' noBorder label='' id='formControlLg'  >
                  <input 
                    className='form-control rounded bg-white m-1'  
                    type='name' 
                    disabled={true}
                    value={nombreUser}
                    
                    
                    
                />
                </MDBInputGroup>
                
                <MDBInputGroup   textBefore='Cargo:'  textClass='bg-white'noBorder label='' id='formControlLg' >
                  <input 
                    className='form-control rounded bg-white m-1'  
                    type='name' 
                    disabled={true}
                    value={rolUser}
                />
                </MDBInputGroup>
                <MDBInputGroup   textBefore='Equipo:' textClass='bg-white' noBorder label='' id='formControlLg' >
                  <input 
                    className='form-control rounded bg-white m-1'  
                    type='name' 
                    disabled={true}
                    value={equipoUser}
                    
                />
                </MDBInputGroup>
                
              </div>
              <div className="col">

              </div>
          </div>
          <div className="row m-3" style={{
                backgroundColor: 'white'
                
                 ,  
              }}>
              <div className="col">
              <div className="m-3">
                    <div className="row">
                    <div className="col">
                    <MDBInputGroup   textBefore='Ingresar fecha deseada:' textClass='bg-white' noBorder label='' id='formControlLg' >
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
                    <div className="col " align="right">
                    <Button
                        variant="outlined" 
                        color="primary"
                        onClick={(event)=>{  
                          console.log(fechaUser)
                        }}
                        >
                        Buscar
                    </Button>
                    </div>
                    </div>
                </div>
                  
              </div>
          </div>
          <div className="row m-3" style={{
                backgroundColor: 'white'
                
                 ,  
              }}>
          {/* Tabla  */}
          <div className="pt-5" >
            <table class="table table-hover table-bordered text-center">
              <thead className='table-primary text-center' >
                <tr >
                    
                  
                  <th scope="col" ># </th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Hora</th>
                  
                  
                  <th scope="col">Descripción</th>
                  <th scope="col">Archivo</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>00/00/00</td>
                  <td>00:00</td>
                  <td>---------</td>
                  <td>---------</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
           
        
      </div>
      </div>
    );
}
export default ActividadLog;