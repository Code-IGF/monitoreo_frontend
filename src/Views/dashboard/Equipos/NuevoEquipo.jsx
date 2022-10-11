import { 
    TextField,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    Alert
} from "@mui/material";
import { 
    useState,
    useEffect
 } from "react";
import GroupAdd from "@mui/icons-material/GroupAdd";
import AuthUser from "../../../components/AuthUser";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import TablaNuevoEquipo from "./NuevoEquipo/TablaNuevoEquipo";
import AlertDialogSlide from "../../../components/AlertEliminar";

const NuevoEquipo=()=>{
    const [nombreEquipo, setNombreEquipo]=useState("");
    const [descripcionEquipo, setDescripcionEquipo]=useState("");
    const [areaEquipo, setAreaEquipo]=useState("");
    const [areas, setAreas]=useState();
    const [empleados, setEmpleados]=useState("");
    const [equipoEmpleados, setEquipoEmpleado]=useState([]);
    const [selectEmpleado, setSelectEmpleado]=useState("");
    const [soloVer, setSoloVer]=useState(false);
    const [modoEdicion, setModoEdicion]=useState(false);
    const [successEdit, setSuccessEdit]=useState(false);
    const {idEquipo}=useParams();

    //Use state para confirmar eliminacion
    const [acceptDelete, setAcceptDelete]=useState(false);
    //Abrir dialog delete
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }; 

    //http
    const {http, user}=AuthUser();
    const navigate=useNavigate();

    //Si los datos son invalidos
    const [invalidData, setInvalidData]=useState(false);
    const [invalidMessage, setInvalidMessage]=useState("");    

    const handleChangeDepartamento = (event) => {
        setAreaEquipo(event.target.value);
    };

    const handleChangeEmpleado=(event)=>{
        setSelectEmpleado(event.target.value);
        const listEmpleado= equipoEmpleados;

        /* empleados.map(element=> 
            element.id===event.target.value? //Busaca en el arrya empleados el objeto seleccionado
            listEmpleado.includes(element)? //Si lo encuentra verifica si ya se ha seleccionado
                ""
                :
                listEmpleado.push(element) //Si no se ha seleccionado lo agrega al array de seleccionados
            :
            ""
            ); */
        const objeto=empleados.filter(empleado => empleado.id === event.target.value)[0];
        let cont=0
        listEmpleado.forEach((element)=>
            {
                if(element.id===objeto.id){
                    cont=cont+1
                }
            }
        );
        if(cont===0){
            listEmpleado.push(objeto);
        }
    }

    const consultarEmpleados=()=>{
        http.get('/usuarios/empleados').then(
            (res)=>{
                setEmpleados(res.data);
            }
        );
    }

    const consultarAreas=()=>{
        http.get('/areas').then(
            (res)=>{
                setAreas(res.data);
            }
        );
    }

    //Cuando se quiere editar un Equipo--------------------------------------------------
    const consultarEquipo=()=>{
        http.get(`/equipos/${idEquipo}`).then((data)=>{
            //setNombreEquipo(data.data.equipo.nombre)
            if(data.data.equipo.supervisor_id!==user.id){
                setSoloVer(true);
            }
            else{
                setModoEdicion(true);
            }
            setNombreEquipo(data.data.equipo.nombre);
            setDescripcionEquipo(data.data.equipo.descripcion);
            setAreaEquipo(data.data.equipo.area_id);
            setEquipoEmpleado(data.data.empleados);
            
        }).catch(
            ()=>{
            navigate('/equipos');
        })
    }
    //Editar Equipo
    const EditarEquipo=()=>{

        http.put(`/equipos/${idEquipo}`, {
            nombre:nombreEquipo,
            descripcion:descripcionEquipo,
            area_id:areaEquipo,
            integrantes:equipoEmpleados
        }).then((data)=>{
            //Si hay un dato invalido
            if(data.data.type){
                setInvalidData(true);
                setSuccessEdit(false);
                setInvalidMessage(data.data.message)
            }
            else{
                setInvalidData(false);
                setSuccessEdit(true);
            }
        })
    }
    //----------------------------------------------------------------------
    

    //Ejecutando Funciones
    useEffect(()=>{
        console.log("consultando")
        if(idEquipo){
            consultarEquipo();
        }
        consultarAreas();
        consultarEmpleados();
        // eslint-disable-next-line 
    },[]);

    //Crear Equipo
    const CrearEquipo=()=>{

        http.post('/equipos', {
            nombre:nombreEquipo,
            descripcion:descripcionEquipo,
            area_id:areaEquipo,
            integrantes:equipoEmpleados
        }).then((data)=>{
            //Si hay un dato invalido
            if(data.data.type){
                setInvalidData(true);
                setInvalidMessage(data.data.message)
            }
            else{
                navigate('/equipos')
            }
        })
    }

    //Eliminar Equipo
    const eliminarEquipo=()=>{
        http.delete(`/equipos/${idEquipo}`).then((data)=>{
            handleClose()
            navigate('/equipos')
        });
    }

    useEffect(()=>{
        acceptDelete?
            eliminarEquipo():console.log()
            // eslint-disable-next-line
    }, [acceptDelete])

    return(
        <div className="container pt-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h4 className="pb-3">Creación de Equipos</h4>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-end">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="/inicio">Inicio</NavLink></li>
                                <li className="breadcrumb-item"><NavLink to="/equipos">Equipos</NavLink></li>
                                {
                                    idEquipo?
                                        <li className="breadcrumb-item active" aria-current="page">{idEquipo}</li>
                                        :
                                        <li className="breadcrumb-item active" aria-current="page">Nuevo Equipo</li>
                                }
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {soloVer?
                <div className='pb-4'>
                    <Alert severity="warning">Solo puede editar sus equipos.</Alert>
                </div>
                :
                ""
            }
            <div className="card mb-5">
                <div className="card-header fw-bold">
                    Datos del Equipo
                </div>
                <div className="card-body">
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
                    {/**Select de Departamentos */}
                    <FormControl 
                        fullWidth
                        margin="normal"
                    >
                    <InputLabel  
                        id="label-select-rol"
                        >Seleccionar Departamento
                    </InputLabel>
                        <Select
                            fullWidth
                            labelId="label-select-rol"
                            id="select-rol"
                            label="Agregar Empleado al equipo"
                            value={areaEquipo}
                            onChange={handleChangeDepartamento}

                            >
                            {/*Llenando el select de Areas*/}
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
                </div>
                <div className="card-header fw-bold">
                    Participantes del Equipo
                </div>
                <div className="card-body">
                    {/**Select de Empleados */}
                    <FormControl 
                            fullWidth
                            margin="normal"
                        >
                        <InputLabel  
                            id="label-select-empleado"
                            >Agregar Empleado al equipo
                        </InputLabel>
                        <Select
                            fullWidth
                            labelId="label-select-empleado"
                            id="select-empleado"
                            label="Agregar Empleado al equipo"
                            value={selectEmpleado}
                            onChange={handleChangeEmpleado}

                            >
                            {/*Llenando el select de Empleados*/}
                            {empleados? 
                                empleados.map(empleado=>(
                                    <MenuItem 
                                        key={empleado.id} 
                                        value={empleado.id}
                                    >{empleado.name}
                                    </MenuItem>
                                ))
                                :
                                <MenuItem value={0}>{"Cargando ..."}</MenuItem>
                            }
                        </Select>
                    </FormControl>  
                    <TablaNuevoEquipo
                        empleados={equipoEmpleados}
                        setEquipoEmpleado={setEquipoEmpleado}
                    />
                    <div className="text-end pt-3 pb-3">
                    {/**Si hay un error */}
                    {invalidData? 
                        <div className='pb-4'>
                            <Alert severity="error">{invalidMessage}</Alert>
                        </div>
                        :
                        ""}
                    {/**Si todo sale bien */}
                    {successEdit? 
                        <div className='pb-4'>
                            <Alert severity="success">Equipo Modificado</Alert>
                        </div>
                        :
                        ""}
                        {
                            soloVer?
                            ""
                            :
                            <Button
                                variant="outlined" 
                                startIcon={<GroupAdd/>}
                                onClick={
                                    modoEdicion?
                                        EditarEquipo:CrearEquipo}
                            >
                                Enviar Datos
                            </Button>
                        }
                        <div className="text-start">
                            {modoEdicion?
                            <Button
                                variant="outlined" 
                                color="error"
                                startIcon={<GroupAdd/>}
                                onClick={handleClickOpen}
                            >
                                Eliminar Equipo
                            </Button>
                            :""
                            }
                        </div>

                        <AlertDialogSlide
                            open={open}
                            handleClose={handleClose}
                            tipoElemento={"Equipo"}
                            setAcceptDelete={setAcceptDelete}
                        >
                        </AlertDialogSlide>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NuevoEquipo;