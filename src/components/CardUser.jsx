
import { 
    CardHeader,
    Avatar
 } from "@mui/material";

const CardUser=({user, baseURL})=>{
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
                
                title={user.name}
                subheader={user.roles[0].name}
            />
        </div>
    )
}
export default CardUser;