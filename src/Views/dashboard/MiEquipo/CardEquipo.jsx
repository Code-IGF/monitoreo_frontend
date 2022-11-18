
import { 
    CardHeader,
    Avatar,
    Button,
 } from "@mui/material";
//import { red } from '@mui/material/colors';
import VideoCameraFront from "@mui/icons-material/VideoCameraFront";
import { NavLink } from "react-router-dom";


const CardEquipo = ({usuario,equipo})=>{
    return(
        <div>
            <CardHeader 
                avatar={
                <Avatar image="img/profile.png" size="large" shape="circle" />  
                }
                action={
                    <NavLink to="/sala-trabajo">
                        <Button aria-label="settings" startIcon={<VideoCameraFront/>}>
                            Entrar en Sala
                        </Button>
                    </NavLink>
                    }
                title={usuario.name}
                subheader={usuario.roles}
            />
        </div>
    )
}
export default CardEquipo;