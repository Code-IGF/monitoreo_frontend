
import { 
    CardHeader,
    Avatar,
    Button,
 } from "@mui/material";
import { red } from '@mui/material/colors';
import VideoCameraFront from "@mui/icons-material/VideoCameraFront";

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
                    <Button aria-label="settings" startIcon={<VideoCameraFront/>}>
                        Entrar en Sala
                    </Button>
                    }
                title={equipo.nombre}
                subheader={equipo.descripcion}
            />
        </div>
    )
}
export default CardEquipo;