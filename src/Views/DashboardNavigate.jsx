import {
  Routes,
  Route,
} from "react-router-dom";
import SideBAr from './../components/sidebar';
import Equipos from './dashboard/Equipos';
import PerfilUsuario from './dashboard/PerfilUsuario';
import Dashboard from './dashboard/Dashboard';
import Areas from './dashboard/Areas';
import GestionDeUsuario from './dashboard/GestionDeUsuario';
import GestionDeEquipo from './dashboard/roles/GestionDeEquipo';
import AuthUser from "../components/AuthUser";

const DashboardNavigate = ()=>{
    const {token, logout}=AuthUser();
    const logoutUser = ()=>{
        console.log("Cerrando");
        console.log(token)
        if(token !== undefined){
            logout();
        }
    }

    return (
        <div className="">
            {/*Paso la función de cerrar sesión como propiedad*/}
          <SideBAr logoutUser={logoutUser}></SideBAr>
          <Routes>
              <Route path='/equipos' element={<Equipos/>}></Route>
              <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
    
              <Route path='/perfil' element={<PerfilUsuario/>}></Route>
    
              <Route path='/areas' element={<Areas></Areas>}></Route>
              <Route path='/usuarios' element={<GestionDeUsuario></GestionDeUsuario>}></Route>
              <Route path='/gestionDeEquipo' element={<GestionDeEquipo></GestionDeEquipo>}></Route>
    
            </Routes>
        </div>
      );
}
export default DashboardNavigate;