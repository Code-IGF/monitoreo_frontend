import SideBAr from './../components/sidebar';

import AuthUser from "../components/AuthUser";
import DashboarEmpleado from "./DashboardEmpleado";
import DashboarSupervisor from "./DashboardSupervisor";
import DashboardAdmin from "./DashboardAdmin";

const DashboardNavigate = ({baseURL})=>{
    const {token, logout, user}=AuthUser();
    const {roles}=user;
    const logoutUser = ()=>{
        /* console.log("Cerrando");
        console.log(token) */
        if(token !== undefined){
            logout();
        }
    }

    return (
        <div className="">
            {/*Paso la función de cerrar sesión como propiedad*/}
          <SideBAr 
            logoutUser={logoutUser}
            idRol={roles[0].id}
            ></SideBAr>
            {/** ID=1 -> Usuarios administrador */}
            {roles[0].id===1?
              <DashboardAdmin 
                baseURL={baseURL}
                />
              :
               roles[0].id===2?
               <DashboarSupervisor
                baseURL={baseURL}
                />
                :
                <DashboarEmpleado
                baseURL={baseURL}
                />
            }
    
        </div>
      );
}
export default DashboardNavigate;