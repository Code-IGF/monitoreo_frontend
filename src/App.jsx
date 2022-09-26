import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Views/public/login';

function App() {
  return (
    <div className="">
      <Routes>

          <Route path='/' element={<Login></Login>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
