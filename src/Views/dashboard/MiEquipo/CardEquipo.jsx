
import { 
    CardHeader,
    Avatar,
    Button,
 } from "@mui/material";
import { red } from '@mui/material/colors';
import VideoCameraFront from "@mui/icons-material/VideoCameraFront";
import { NavLink } from "react-router-dom";

const CardEquipo = ({equipo, abrirConfiguracion, setHoraInicio, setHoraFin, setIntervalo, setIdSala})=>{
    const configurarSala=()=>{
        setHoraInicio(equipo.sala_trabajo.hora_entrada)
        setHoraFin(equipo.sala_trabajo.hora_salida)
        setIntervalo(equipo.sala_trabajo.intervalo_conexion)
        setIdSala(equipo.sala_trabajo.id)
        abrirConfiguracion();
    }
    return(
        <div>
            <CardHeader 
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                    <>
                    <NavLink to={`/sala/${equipo.sala_trabajo.id}`}>
                        <Button aria-label="settings" startIcon={<VideoCameraFront/>}>
                            Entrar en Sala
                        </Button>
                    </NavLink>
                    {
                        equipo.usuarios?
                            <Button 
                                aria-label="settings" 
                                startIcon={<VideoCameraFront/>}
                                onClick={configurarSala}
                            >
                                Configurar Sala
                            </Button>
                        :
                        ""
                    }
                    </>
                    }
                title={equipo.nombre}
                subheader={equipo.descripcion}
            />
        </div>
    )
}
export default CardEquipo;