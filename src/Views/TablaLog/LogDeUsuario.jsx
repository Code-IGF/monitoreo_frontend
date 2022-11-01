import TablaLog from "./TablaLog";
import AuthUser from "../../components/AuthUser";
const LogDeUsuario = ({baseURL})=>{
const {http}=AuthUser();
return (
    <div>
         <TablaLog http={http}>  
              
        </TablaLog>     
    </div>
)
}
export default LogDeUsuario;