import SideBAr from './../components/sidebar';
import AuthUser from "../components/AuthUser";

//Publico
import PerfilUsuario from './dashboard/PerfilUsuario';
import Dashboard from './dashboard/Dashboard';
import PublicMessagesPage from "../components/PublicMessagesPage";
import ActividadLog from './dashboard/ActividadLog';
import SalaTabajo from './dashboard/SalaTrabajo/SalaTrabajo';
//Empleado
import MiEquipo from "./dashboard/MiEquipo/MiEquipo";
//Supervisor
import GestionDeEquipo from './dashboard/Equipos/GestionDeEquipo';
import NuevoEquipo from "./dashboard/Equipos/NuevoEquipo";
import LogDeUsuario from "./TablaLog/LogDeUsuario";
//Administrador
import Areas from './dashboard/Areas';
import GestionDeUsuario from './dashboard/GestionDeUsuario';

import { Routes, Route } from 'react-router-dom';

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
            <Routes>
              {/**Publico */}
              <>
              <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
              <Route path='/perfil' element={<PerfilUsuario baseURL={baseURL}/>}></Route>
              <Route path='/sala-trabajo' element={<SalaTabajo baseURL={baseURL}/>}></Route>
              <Route path='/public-mensaje' element={<PublicMessagesPage/>}></Route>
              
              </>
              {/**Empleado */}
              {
                roles[0].id===3?
                <>
                  <Route path='/mis-Equipos' element={<MiEquipo baseURL={baseURL}></MiEquipo>}></Route>
                  <Route path='/actividad' element={<ActividadLog baseURL={baseURL}/>}></Route>
                </>
                :
                ""
              }
              {/**Supervisor */}
              {roles[0].id===2?
                <>
                  <Route path='/equipos' element={<GestionDeEquipo/>}></Route>
                  <Route path='/log' element={<LogDeUsuario/>}></Route>
                  <Route path='/equipos/nuevo' element={<NuevoEquipo/>}></Route>
                  <Route path='/equipos/:idEquipo' element={<NuevoEquipo/>}></Route>
                  <Route path='/mis-Equipos' element={<MiEquipo baseURL={baseURL}></MiEquipo>}></Route>
                  <Route path='/actividad' element={<ActividadLog baseURL={baseURL}/>}></Route>
                </>
                :
                ""
              }
              {/**Administrador */}
              {roles[0].id===1?
                <>
                <Route path='/equipos' element={<GestionDeEquipo/>}></Route>
                <Route path='/equipos/nuevo' element={<NuevoEquipo/>}></Route>
                <Route path='/areas' element={<Areas></Areas>}></Route>
                <Route path='/usuarios' element={<GestionDeUsuario baseURL={baseURL}/>}></Route>
                <Route path='/actividad' element={<ActividadLog baseURL={baseURL}/>}></Route>
                </>
                :""
              }
            </Routes>
        </div>
      );
}
export default DashboardNavigate;