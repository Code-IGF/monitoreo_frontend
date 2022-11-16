
import { 
    CardHeader,
    Avatar,
    Button,
 } from "@mui/material";
import { red } from '@mui/material/colors';
import VideoCameraFront from "@mui/icons-material/VideoCameraFront";
import { NavLink } from "react-router-dom";

const CardEquipo = ({equipo})=>{
    return(
        <div>
            <CardHeader 
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                    <NavLink to="/sala-trabajo">
                        <Button aria-label="settings" startIcon={<VideoCameraFront/>}>
                            Entrar en Sala
                        </Button>
                    </NavLink>
                    }
                title={equipo.nombre}
                subheader={equipo.descripcion}
            />
        </div>
    )
}
export default CardEquipo;