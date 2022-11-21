import { 
    useState,
    useEffect
} from "react";
import AuthUser from "../../../components/AuthUser";
import CardEquipo from "./CardEquipo";
import { 
    Paper,
    Card
 } from "@mui/material";
import { blue } from '@mui/material/colors';
import ConfiguracionSala from "../SalaTrabajo/Configuracion";


const MiEquipo=({baseURL})=>{
    const {http}=AuthUser();
    const [misEquipos, setMisEquipos]=useState([]);
    const [open, setOpen] = useState(false);
    const [horaInicio, setHoraInicio]=useState("");
    const [horaFin, setHoraFin]=useState("");
    const [intervalo, setIntervalo]=useState("");
    const [idSala, setIdSala]=useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const consultarMisEquipos=()=>{
        http.get("usuario/miEquipo").then((data)=>{
            data.data.equipo?
                //Si es un empleado
                setMisEquipos(data.data.equipo)
                :
                //Si es un supervisor
                setMisEquipos(data.data)
        });
    }

    const actualizarConfiguracion=()=>{
        http.post(`sala/${idSala}`,{
            hora_entrada:horaInicio,
            hora_salida:horaFin,
            intervalo_conexion:intervalo,
            id:idSala
        }).then((data)=>{
            console.log(data.data)
        })
    }

    

    useEffect(()=>{
        consultarMisEquipos();
        // eslint-disable-next-line 
    },[])

    return (
        <div className="container-fluid p-5">
            <Paper
                className="mb-3" 
                square={true} 
                elevation={3}
                sx={{ 
                    bgcolor: blue[600] 
                }}
                >
                <div className="text-center text-white fw-bold fs-6">
                    Mis Equipos
                </div>
            </Paper>
            <Card>
            {
                misEquipos.map((equipo)=>(
                    <CardEquipo 
                        key={equipo.id}
                        equipo={equipo}
                        abrirConfiguracion={handleClickOpen}
                        setHoraInicio={setHoraInicio}
                        setHoraFin={setHoraFin}
                        setIntervalo={setIntervalo}
                        setIdSala={setIdSala}
                    />
                ))
            }
            </Card>

            <ConfiguracionSala
                open={open}
                handleClose={handleClose}
                tipoElemento={"Equipo"}
                horaInicio={horaInicio}
                horaFin={horaFin}
                intervalo={intervalo}
                setHoraInicio={setHoraInicio}
                setHoraFin={setHoraFin}
                setIntervalo={setIntervalo}
                actualizarConfiguracion={actualizarConfiguracion}
            >
            </ConfiguracionSala>




        </div>
    )
}
export default MiEquipo;