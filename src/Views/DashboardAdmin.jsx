import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import PerfilUsuario from './dashboard/PerfilUsuario';
  import Dashboard from './dashboard/Dashboard';
  import Areas from './dashboard/Areas';
  import GestionDeUsuario from './dashboard/GestionDeUsuario';
  import GestionDeEquipo from './dashboard/Equipos/GestionDeEquipo';
  import NuevoEquipo from "./dashboard/Equipos/NuevoEquipo";

  const DashboardAdmin = ({baseURL})=>{

      return (
            <Routes>
                <Route path='/equipos' element={<GestionDeEquipo/>}></Route>
                <Route path='/equipos/nuevo' element={<NuevoEquipo/>}></Route>
                <Route path='/areas' element={<Areas></Areas>}></Route>
                <Route path='/usuarios' element={<GestionDeUsuario baseURL={baseURL}/>}></Route>
                <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
                <Route path='/perfil' element={<PerfilUsuario baseURL={baseURL}/>}></Route>
            </Routes>
        );
  }
  export default DashboardAdmin;