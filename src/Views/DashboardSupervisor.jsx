import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import PerfilUsuario from './dashboard/PerfilUsuario';
  import Dashboard from './dashboard/Dashboard';
  import GestionDeEquipo from './dashboard/Equipos/GestionDeEquipo';
  import NuevoEquipo from "./dashboard/Equipos/NuevoEquipo";
  import LogDeUsuario from "./TablaLog/LogDeUsuario";

  const DashboarSupervisor = ({baseURL})=>{

      return (
            <Routes>
                <Route path='/equipos' element={<GestionDeEquipo/>}></Route>
                <Route path='/log' element={<LogDeUsuario/>}></Route>
                <Route path='/equipos/nuevo' element={<NuevoEquipo/>}></Route>
                <Route path='/equipos/:idEquipo' element={<NuevoEquipo/>}></Route>
                <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
                <Route path='/perfil' element={<PerfilUsuario baseURL={baseURL}/>}></Route>
            </Routes>
        );
  }
  export default DashboarSupervisor;