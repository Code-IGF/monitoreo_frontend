
import { 
    CardHeader,
    Avatar
 } from "@mui/material";
 import PreviewIcon from '@mui/icons-material/Preview';
 import Button  from "@mui/material/Button";
 import { NavLink } from "react-router-dom";

const CardUser=({user, baseURL, currentUser})=>{
    return(
        <div>
            <CardHeader 
                avatar={
                <Avatar 
                    aria-label="recipe" 
                    src={`${baseURL}${user.imagen}`}    
                >
                </Avatar>
                }
                action=
                    {
                        currentUser.roles[0].name==="Supervisor"?
                            <NavLink
                                to={`/actividad/${user.id}`}
                            >
                                <Button 
                                    aria-label="Ver Actividad" 
                                    startIcon={<PreviewIcon/>}
                                >
                                </Button>
                            </NavLink>
                        :
                        ""
                    }
                title={user.name}
                subheader={user.roles[0].name}
            />
        </div>
    )
}
export default CardUser;