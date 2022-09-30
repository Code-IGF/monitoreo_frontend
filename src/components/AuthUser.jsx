import axios from "axios";

const AuthUser=()=>{
    const http = axios.create({
        baseURL: "http://localhost:8000/api/",
        headers:{
            "content-type":"application/json"
        }
    });

    return{
        http
    }
}
export default AuthUser;
