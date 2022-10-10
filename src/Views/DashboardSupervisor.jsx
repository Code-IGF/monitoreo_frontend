import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import PerfilUsuario from './dashboard/PerfilUsuario';
  import Dashboard from './dashboard/Dashboard';
  import GestionDeEquipo from './dashboard/roles/GestionDeEquipo';

  const DashboarSupervisor = ({baseURL})=>{

      return (
            <Routes>
                <Route path='/equipos' element={<GestionDeEquipo/>}></Route>
                <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
                <Route path='/perfil' element={<PerfilUsuario/>}></Route>
            </Routes>
        );
  }
  export default DashboarSupervisor;