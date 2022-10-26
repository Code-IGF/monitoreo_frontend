import img from '../../img/work.svg';
import { useState } from 'react';
import AuthUser from '../../components/AuthUser';

//import{MDBCheckbox} from 'mdb-react-ui-kit'
import { Button, 
    TextField
} from "@mui/material";
import Alert from '@mui/material/Alert';

const Login=()=> {
    
    //Variables
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const {http, setToken}=AuthUser();
    //Si hay datos errones
    const [invalidData, setInvalidData]=useState(false);

    //Eviar datos
    const submitForm=()=>{
        http.post('/login', {email:email, password: password}).then(
            (respuesta)=>{
                /* console.log(respuesta.data); */
                setToken(respuesta.data.user, respuesta.data.access_token);
            }

        ).catch(
            (response)=>{
                setInvalidData(true);
            }
        );
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
                        <TextField 
                            id="outlined-basic" 
                            fullWidth 
                            label="Correo Electronico" 
                            variant="outlined" 
                            className='pb-5'
                            onChange={e=>setEmail(e.target.value)} 
                        />
                        <TextField 
                            id="outlined-basic" 
                            fullWidth 
                            label="Contraseña" 
                            variant="outlined" 
                            type="password"
                            className='pb-5'
                            onChange={e=>setPassword(e.target.value)}
                        />
                        {invalidData? <div className='pb-5'>
                            <Alert severity="error">Correo o contraseña invalidos</Alert>
                        </div>:""}

                            {/* <div className="d-flex justify-content-between mx-3 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuérdame' />
                            </div> */}

                            <div className="d-grid">
                                <Button 
                                    variant="outlined" 
                                    onClick={submitForm}
                                    >
                                    Iniciar Sesión
                                </Button> 
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
  