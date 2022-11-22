
import { 
    CardHeader,
    Avatar
 } from "@mui/material";
 import PreviewIcon from '@mui/icons-material/Preview';
 import Button  from "@mui/material/Button";

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
                            <Button 
                                aria-label="Ver Actividad" 
                                startIcon={<PreviewIcon/>}
                            >
                            </Button>
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