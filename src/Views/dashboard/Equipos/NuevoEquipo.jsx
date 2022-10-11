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
import { NavLink, useNavigate } from "react-router-dom";
import TablaNuevoEquipo from "./NuevoEquipo/TablaNuevoEquipo";

const NuevoEquipo=()=>{
    const [nombreEquipo, setNombreEquipo]=useState("");
    const [descripcionEquipo, setDescripcionEquipo]=useState("");
    const [areaEquipo, setAreaEquipo]=useState("");
    const [areas, setAreas]=useState();
    const [empleados, setEmpleados]=useState("");
    const [equipoEmpleados, setEquipoEmpleado]=useState([]);
    const [selectEmpleado, setSelectEmpleado]=useState("");

    //http
    const {http}=AuthUser();
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

        empleados.map(element=> 
            element.id===event.target.value? //Busaca en el arrya empleados el objeto seleccionado
            listEmpleado.includes(element)? //Si lo encuentra verifica si ya se ha seleccionado
                ""
                :
                listEmpleado.push(element) //Si no se ha seleccionado lo agrega al array de seleccionados
            :
            ""
            );
        //console.log(listEmpleado);
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

    //Ejecutando Funciones
    useEffect(()=>{
        console.log("consultando")
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
                                <li className="breadcrumb-item active" aria-current="page">Nuevo Equipo</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
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
                    {invalidData? 
                        <div className='pb-4'>
                            <Alert severity="error">{invalidMessage}</Alert>
                        </div>
                        :
                        ""}
                    <Button
                        variant="outlined" 
                        startIcon={<GroupAdd/>}
                        onClick={CrearEquipo}
                    >
                        Crear Nuevo Equipo
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NuevoEquipo;