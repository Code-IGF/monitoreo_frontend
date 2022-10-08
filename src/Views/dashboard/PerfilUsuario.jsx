
import LockIcon from '@mui/icons-material/Lock';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import img from '../../img/profile.png';

  import {
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';



function PerfilUsuario() {
    return (
        
            <div className="container " style={{
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
                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Nombre:' noBorder label='' id='formControlLg' >
                                                <input className='form-control rounded '  type='name' />
                                            </MDBInputGroup>
                                        </div>
                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Apellido:' noBorder label='' id='formControlLg'  >
                                             <input className='form-control rounded' type='name' />
                                            </MDBInputGroup>
                                        </div>
                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Fecha de nacimiento:' noBorder label='' id='formControlLg' >
                                                <input className='form-control rounded' type='date' />
                                            </MDBInputGroup>
                                        </div>

                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Área:' noBorder label='' id='formControlLg' >
                                                <select className='form-select'>
                                                <option selected>Seleccione el área de la empresa</option>
                                                <option value={"admin"}>Administración</option>
                                                <option value={"marketing"}>Marketing</option>
                                            </select>
                                            </MDBInputGroup>
                                        </div>
                                        
                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Correo:' noBorder label='' id='formControlLg' >
                                                <span class="input-group-text bg-white rounded" id="basic-addon1">@</span>
                                                <input className='form-control rounded' type='email' />
                                            </MDBInputGroup>
                                        </div>
                                        <div class="m-3">
                                            <MDBInputGroup   textBefore='Contraseña:' noBorder label='' id='formControlLg' >
                                                
                                                <span class="input-group-text bg-white rounded" id="key"><LockIcon></LockIcon></span>
                                                <input className='form-control rounded' type='password' />
                                            </MDBInputGroup>
                                        </div>
                                        <div className='w-100  py-3 ' align="right" >
                                            <MDBBtn type="submit"  >Actualizar</MDBBtn>
                                        </div>  
                                        
                                    </div> 
                                    <div className="col-4 bg d-none d-md-block" >
                                        <div className='img-holder'align="center">
                                            <img src={img} width="150" height="150"alt='Imagen de Perfil'/>
                                        </div>
                                    
                                        <div className='w-100  py-4 ' align="center" >
                                        <button type="button" class="btn btn-outline-primary bg-white">Modificar Foto   <PhotoCameraIcon></PhotoCameraIcon></button>

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