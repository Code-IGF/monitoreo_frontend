import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser(){


    const getToken=()=>{
        const tokenString=sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser=()=>{
        const userString=sessionStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details;
    }

    //Se debe inicializar con los metodos getToken y getUser
    const [token, setToken]= useState(getToken);
    const [user, setUser]=useState(getUser);
    ///Se ocupa para redirigir 
    const navigate = useNavigate();

    const saveToken=(user, token)=>{
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/inicio');//Para redirigir al inicio
    }

    const http = axios.create({
        baseURL: "https://code-rm.tk/api/",
        //baseURL: "http://localhost:8000/api/",
        headers:{
            "content-type":"application/json",
            "Authorization": `bearer ${token}`
        }
    });
    //Ocupo para interceptar el erro 401 (Ocurre cuando el usuario no esta loggeado o no tiene el nievel de acceso necesario)
    http.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (401 === error.response.status) {
            logout();
        } else {
            return Promise.reject(error);
        }
    });

    //Función para cerrar sesión, solo borra el token y el user
    const logout = () =>{
        sessionStorage.clear();
        navigate('/');
    }

    return{
        setToken:saveToken,
        http,
        token, 
        user,
        getToken,
        getUser,
        logout
    }
}

