import { 
    Button,
    TextField, 
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

const FormEquipos=(
    {
        verModal, 
        nombreEquipo,
        setNombreEquipo,
        descripcionEquipo,
        setDescripcionEquipo,
        setAreaEquipo,
        areaEquipo,

        registrarUsuario,
        areas,

        basicModal,
        setBasicModal,
        habilitarEdicion,
        editarUsuario,

    })=>{

    const handleChangeDepartamento = (event) => {
        setAreaEquipo(event.target.value);
    };
    return (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            {/*Atributo size indica el tamaño del modal opciones:
                "sm" "lg" "xl" (tamaño por defecto "medio" siempre que no se incluya la propiedad)
            */}
            <MDBModalDialog size="lg">
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Formulario de Equipo</MDBModalTitle>
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
                            value={nombreEquipo}
                            onChange={e=>setNombreEquipo(e.target.value)} 
                        />

                        <TextField 
                        id="outlined-basic" 
                        fullWidth 
                        label="Descripción del Equipo" 
                        variant="outlined" 
                        multiline
                        margin="normal"
                        onChange={e=>setDescripcionEquipo(e.target.value)} 
                        value={descripcionEquipo}
                        rows={3}
                        />
                        {/*Select Areas --------------------------------------------------------------*/}
                        <FormControl 
                            fullWidth
                            margin="normal"
                            >
                            <InputLabel  
                                id="label-select-rol"
                                >Departamento del Equipo
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="label-select-rol"
                                id="select-rol"
                                value={areaEquipo}
                                label="Departamento del Equipo"
                                onChange={handleChangeDepartamento}

                                >
                                {/*Llenando el select de Roles*/}
                                {areas? 
                                    areas.map(area=>(
                                        <MenuItem 
                                            key={area.id} 
                                            value={area.id}
                                        >{area.nombre}
                                        </MenuItem>
                                    ))
                                    :
                                    <MenuItem value={0}>{"Cargando ..."}</MenuItem>
                                }
                            </Select>
                        </FormControl>     
                                               
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
export default FormEquipos;