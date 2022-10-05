import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './public/login';

const PublicNavigate=()=>{
    return (
        <div className="">
          <Routes>
              <Route path='/' element={<Login></Login>} ></Route>
            </Routes>
        </div>
      );
}

export default PublicNavigate;