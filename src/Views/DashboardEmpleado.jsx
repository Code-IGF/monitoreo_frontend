import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import PerfilUsuario from './dashboard/PerfilUsuario';
  import Dashboard from './dashboard/Dashboard';

  const DashboarEmpleado = ({baseURL})=>{

      return (
            <Routes>
                <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
                <Route path='/perfil' element={<PerfilUsuario/>}></Route>
            </Routes>
        );
  }
  export default DashboarEmpleado;