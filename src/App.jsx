import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Views/public/login';
import SideBAr from './components/sidebar';
import Equipos from './Views/dashboard/Equipos';
import Dashboard from './Views/dashboard/Dashboard';
import Areas from './Views/dashboard/Areas';

function App() {
  return (
    <div className="">
      <SideBAr></SideBAr>
      <Routes>

          <Route path='/' element={<Login></Login>} ></Route>
          <Route path='/equipos' element={<Equipos/>}></Route>
          <Route path='/inicio' element={<Dashboard></Dashboard>}></Route>
          <Route path='/areas' element={<Areas></Areas>}></Route>
        </Routes>
    </div>
  );
}

export default App;
