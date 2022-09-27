import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Views/public/login';
import SideBAr from './components/sidebar';
import Equipos from './Views/dashboard/Equipos';

function App() {
  return (
    <div className="">
      <SideBAr></SideBAr>
      <Routes>

          <Route path='/' element={<Login></Login>} ></Route>
          <Route path='/equipos' element={<Equipos/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
