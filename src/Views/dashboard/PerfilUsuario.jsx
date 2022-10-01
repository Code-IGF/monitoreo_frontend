

  import React, { useState } from 'react';
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
    MDBInputGroup,
    MDBListGroupItem,
  } from 'mdb-react-ui-kit';
function PerfilUsuario() {
    return (
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center px-4">
                    <div className="col">
                        <div className="row shadow rounded align-items-center" id="cuadro_Datos_Usuario">
                            {/*Datos de usuario*/}
                            <div className='w-100 text-center py-4'>
                                <h2 className="fw-normal text-primary">Perfil de Usuario</h2>
                            </div>
                            <div className="col-12 col-md-8 bg-white p-3 ">
                                
                                <form className="p-4">
                                    <MDBInputGroup  wrapperClass='mb-5' textBefore='Nombre:' noBorder label='' id='formControlLg' >
                                        <input className='form-control rounded' type='name' />
                                    </MDBInputGroup>
                                    
                                    <MDBInputGroup  wrapperClass='mb-5' textBefore='Apellido:' noBorder label='' id='formControlLg' >
                                        <input className='form-control rounded' type='name' />
                                    </MDBInputGroup>
                                   
                                    <MDBInputGroup  wrapperClass='mb-5' textBefore='Fecha de nacimiento' noBorder label='' id='formControlLg' >
                                        <input className='form-control rounded' type='date' />
                                    </MDBInputGroup>
                                    
                                    Area:

                                    <MDBInputGroup  wrapperClass='mb-5' textBefore='Correo' noBorder label='' id='formControlLg' >
                                        <input className='form-control rounded' type='email' />
                                    </MDBInputGroup>
                                    <MDBInputGroup  wrapperClass='mb-5' textBefore='Contraseña' noBorder label='' id='formControlLg' >
                                        <input className='form-control rounded' type='password' />
                                    </MDBInputGroup>
                                    <div className='w-100  py-4 ' align="right" >
                                        
                                        <MDBBtn type="submit" >Actualizar</MDBBtn>
                                        
                                    </div>    
                                    <div className="col-12 col-md-8 bg-white p-3 ">
                                    
                                    <div className='w-100  py-4 ' align="right" >
                                    <MDBBtn type="submit" >Modificar foto</MDBBtn>

                                    </div>
                                    
                                    
                                    </div>
                                     
                                </form>    
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        
    );


}
export default PerfilUsuario;