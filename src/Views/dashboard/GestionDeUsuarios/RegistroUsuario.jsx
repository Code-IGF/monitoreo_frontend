import { 
    Button,
    TextField, 
    Divider,
    InputLabel,
    MenuItem,
    Select,
    FormControl 
 } from '@mui/material';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter
  } from 'mdb-react-ui-kit';
import CloseIcon from '@mui/icons-material/Close';

const RegistroUsuario=(
    {
        verModal, 
        setNombreUsuario, 
        setEmailUsuario, 
        setPasswordUsuario, 
        setFechaNacimiento, 
        setRolUsuario,
        fileSelect,
        registrarUsuario,
        roles,
        fechaNacimiento,
        PasswordUsuario,
        emailUsuario,
        nombreUsuario,
        rolUsuario,
        basicModal,
        setBasicModal,
        habilitarEdicion,
        editarUsuario,
        fileRef,
    })=>{

    const handleChangeRol = (event) => {
        setRolUsuario(event.target.value);
    };
    return (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            {/*Atributo size indica el tamaño del modal opciones:
                "sm" "lg" "xl" (tamaño por defecto "medio" siempre que no se incluya la propiedad)
            */}
            <MDBModalDialog size="lg">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Formulario para Registro de Empleado</MDBModalTitle>
                        <Button 
                            variant="text" 
                            startIcon={<CloseIcon />}
                            onClick={verModal}
                        >
                        </Button>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <TextField 
                            id="input-name" 
                            fullWidth 
                            label="Nombre" 
                            variant="outlined" 
                            value={nombreUsuario}
                            onChange={e=>setNombreUsuario(e.target.value)} 
                        />
                        <TextField 
                            id="input_email" 
                            fullWidth 
                            label="Correo Electronico" 
                            type="email"
                            variant="outlined" 
                            margin="normal"
                            value={emailUsuario}
                            onChange={e=>setEmailUsuario(e.target.value)} 
                            />
                        {habilitarEdicion?
                            ""
                            :
                            <TextField 
                            id="input-password" 
                            fullWidth 
                            label="Contraseña" 
                            type="password"
                            variant="outlined" 
                            margin="normal"
                            value={PasswordUsuario}
                            onChange={e=>setPasswordUsuario(e.target.value)} 
                        />
                        }
                        <input 
                            className='mb-3 mt-3 pb-3 pt-3 form-control'
                            type="date"
                            value={fechaNacimiento}
                            onChange={
                                (e)=>{setFechaNacimiento(e.target.value)}
                            } 
                        />
                        {/*Select Roles --------------------------------------------------------------*/}
                        <FormControl 
                            fullWidth
                            margin="normal"
                            >
                            <InputLabel  
                                id="label-select-rol"
                                >Rol del Empleado
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="label-select-rol"
                                id="select-rol"
                                value={rolUsuario}
                                label="Rol del Empleado"
                                onChange={handleChangeRol}

                                >
                                {/*Llenando el select de Roles*/}
                                {roles? 
                                    roles.map(rol=>(
                                        <MenuItem 
                                            key={rol.id} 
                                            value={rol.id}
                                        >{rol.name}
                                        </MenuItem>
                                    ))
                                    :
                                    <MenuItem value={0}>{"No se Registraron Roles"}</MenuItem>
                                }
                            </Select>
                        </FormControl>                            
                        {/* Input para subir imagen */}
                        <div className="mb-3 mt-3">
                            <label htmlFor="formFileSm" className="form-label">Foto del Empleado.</label>
                            <Divider className='mb-3'/>
                            <input 
                                ref={fileRef}
                                className="form-control form-control-sm" 
                                id="formFileSm" 
                                type="file"
                                onChange={fileSelect}
                            />
                        </div>
                    </MDBModalBody>



                    <MDBModalFooter>
                    <Button 
                        variant="text" 
                        color="error"
                        onClick={verModal}
                    >Cerrar
                    </Button>
                    <Button 
                        variant="text" 
                        onClick={habilitarEdicion? editarUsuario :registrarUsuario}
                    >Enviar
                    </Button>
                    </MDBModalFooter>


                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}
export default RegistroUsuario;