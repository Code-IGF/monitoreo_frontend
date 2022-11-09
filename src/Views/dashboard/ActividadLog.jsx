import img from '../../img/profile.png';
import {

    MDBInputGroup
  } from 'mdb-react-ui-kit';

  import { 
    Button
} from '@mui/material';
  import React, { useState } from 'react';
  /* const fileInitial={
    archivo:null,
    archivoNombre:""
} */
function ActividadLog({baseURL}){
    //const [nombreUser, setNombreUser]=useState("");
    const [fechaUser, setFechaUser]=useState("");
    //const [emailUser, setEmail]=useState("");
    //const [imagenUsuario, setImagenUsuario]=useState(fileInitial);
    const [imagenUrlUser]=useState("")
    //const [successEdit, setSuccessEdit]=useState(false);
    //const [invalidData, setInvalidData]=useState(false);
    //const [invalidMessage, setInvalidMessage]=useState(false);
   

    //Se ejecuta cuando se selecciona un archivo (imagen)
    /* const fileSelect=(e)=>{
        setImagenUsuario({
            archivo: e.target.files[0],
            archivoNombre:e.target.files[0].name,
        });

    } */
    //const [basicModal, setBasicModal] = useState(false);
    //const toggleShow = () => setBasicModal(!basicModal);

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
                    
                    
                    
                />
                </MDBInputGroup>
                <MDBInputGroup   textBefore='Cargo:'  textClass='bg-white'noBorder label='' id='formControlLg' >
                  <input 
                    className='form-control rounded bg-white m-1'  
                    type='name' 
                    disabled={true}
                    
                />
                </MDBInputGroup>
                <MDBInputGroup   textBefore='Equipo:' textClass='bg-white' noBorder label='' id='formControlLg' >
                  <input 
                    className='form-control rounded bg-white m-1'  
                    type='name' 
                    disabled={true}
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
                        
                        
                        //onClick={}
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