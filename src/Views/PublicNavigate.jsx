import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from './public/login';
import PublicMessagesPage from "../components/PublicMessagesPage";


const PublicNavigate=()=>{
    return (
        <div className="">
          <Routes>
              <Route path='/' element={<Login></Login>} ></Route>
              <Route path='/login' element={<Login></Login>} ></Route>
              <Route path='/mensaje' element={<PublicMessagesPage/>}></Route>
            </Routes>
        </div>
      );
}

export default PublicNavigate;