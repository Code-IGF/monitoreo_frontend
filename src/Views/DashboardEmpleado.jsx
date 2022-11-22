import {
    Routes,
    Route,
  } from "react-router-dom";
  
  import PerfilUsuario from './dashboard/PerfilUsuario';
  import Dashboard from './dashboard/Dashboard';
  import ActividadLog from './dashboard/ActividadLog';
  
  const DashboarEmpleado = ({baseURL})=>{

      return (
            <Routes>
                <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
                <Route path='/perfil' element={<PerfilUsuario baseURL={baseURL}/>}></Route>
                <Route path='/actividad/:idUsuario' element={<ActividadLog baseURL={baseURL}/>}></Route>
                
            </Routes>
        );
  }
  export default DashboarEmpleado;