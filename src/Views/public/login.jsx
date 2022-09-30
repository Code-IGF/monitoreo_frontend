import img from '../../img/work.svg';
import { useState } from 'react';
import AuthUser from '../../components/AuthUser';

import{MDBInput, MDBCheckbox, MDBBtn} from 'mdb-react-ui-kit'

const Login=()=> {
    
    //Variables
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const {http}=AuthUser();

    //Eviar datos
    const submitForm=()=>{
        http.post('/login', {email:email, password: password}).then(
            (respuesta)=>{
                console.log(respuesta.data);
            }

        );
        console.log(email);
        console.log(password);
    }

    return (

    <div className="container">
        <div className="row vh-100 justify-content-center align-items-center px-4">
            <div className="col">
                <div className="row shadow rounded align-items-center" id="cuadro_login">
                    {/* Imagen */}
                    <div className="col-6 bg d-none d-md-block">
                        <div className='row justify-content-center'>
                            <embed src={img} className="image-fluid" width="350" height="350"/>
                        </div>
                    </div>
                    {/* Login */}
                    <div className="col-12 col-md-6 bg-white p-3 ">
                        <div className='w-100 text-center py-4'>
                            <h2 className="fw-bold text-primary">Iniciar Sesión</h2>
                        </div>

                       

                            <MDBInput 
                                wrapperClass='mb-5' 
                                label='Correo Electronico' 
                                id='formControlLg' 
                                type='email' 
                                size="lg"
                                onChange={e=>setEmail(e.target.value)}
                            />
                            <MDBInput 
                            wrapperClass='mb-5' label='Contraseña' id='formControlLg' type='password' size="lg"
                            onChange={e=>setPassword(e.target.value)}
                            />

                            <div className="d-flex justify-content-between mx-3 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuérdame' />
                            </div>

                            <div className="d-grid"> 
                                <MDBBtn type="submit"
                                    onClick={submitForm}
                                >Iniciar Sesión</MDBBtn>
                                <a className='pt-4 text-center' href="!#">¿Recuperar Contraseña?</a>
                            </div>
                            <div className='pt-5 d-flex flex-row justify-content-center'>
                                <a href="#!" className="small text-muted me-1">Condiciones de Uso.</a>
                                <a href="#!" className="small text-muted">Politíca de Privacidad</a>
                            </div>
                
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
  
  export default Login;
  