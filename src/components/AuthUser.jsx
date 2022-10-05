import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser=()=>{

    const [token, setToken]= useState();
    const [user, setUser]=useState();
    ///Se ocupa para redirigir 
    const navigate = useNavigate();


    const getToken=()=>{
        const tokenString=sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser=()=>{
        const userString=sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const saveToken=(user, token)=>{
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/inicio');//Para redirigir al inicio
    }

    const http = axios.create({
        baseURL: "https://code-rm.tk/api/",
        headers:{
            "content-type":"application/json",
            "Authorization": `bearer ${token}`
        }
    });

    return{
        setToken:saveToken,
        http,
        token, 
        user,
        getToken,
        getUser,
    }
}
export default AuthUser;
