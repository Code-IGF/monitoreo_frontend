import AuthUser from "../../components/AuthUser";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import TablaLog from "../TablaLog/TablaLog";
import ImagenLog from "../TablaLog/ImagenLog";

function ActividadLog({baseURL}){
    
  
    const [imagen, setImagen]=useState("");
    const [open, setOpen]=useState(false);
    const [logs, setLogs]=useState([]);  
    const [fecha, setFecha]=useState("");
    const {http, user}=AuthUser();
    const [usuario, setUsuario]=useState();
    const {idUsuario}=useParams();
    
    const fechas = ()=>{
      const nuevaFecha= new Date();
      const day = nuevaFecha.getDate();
      const month = nuevaFecha.getMonth() + 1;
      const fullYear = nuevaFecha.getFullYear();
      setFecha(`${fullYear}-${month}-${day}`);
      return `${fullYear}-${month}-${day}`;
    }
    
    const consultarLogs = (url, fecha)=>{
      idUsuario?
        http.post(url,{
          fecha:fecha,
          idUsuario:idUsuario
        }).then(
          (res)=>{
            setLogs(res.data)   
            console.log(res.data)
          }
        )
        :
        http.post(url,{
          fecha:fecha
        }).then(
          (res)=>{
            setLogs(res.data)   
            console.log(res.data)
          }
        )
    }

    const consultaUsuario=()=>{
      http.get(`usuarios/${idUsuario}`).then(
        (data)=>{
          setUsuario(data.data)
        }
      )
    }

  
    useEffect(()=>{
      let ahora=fechas();
      consultarLogs('log/usuario', ahora);
      idUsuario?
        consultaUsuario()
        :
        setUsuario(user)
      // eslint-disable-next-line       
  },[]);


  return(
        
    <div>
      <div className="container pt-5">
        <div className='card'>
          <div className="card-header badge bg-primary">
            <h5>Registro de actividades de usuario</h5>
          </div>
          {
            usuario?
              <div className="row m-3">
                <div className="col-2">
                  <Avatar
                    sx={{height: "80px", width:"80px"}}
                    src={`${baseURL}${usuario.imagen}`}    
                  >
                  </Avatar>
                </div>
                <div className="col-10">
                  <div className="mb-3">
                    <label htmlFor="nombreUser" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombreUser" value={usuario.name} disabled/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombreUser" className="form-label">Cargo</label>
                    <input type="text" className="form-control" id="nombreUser" value={usuario.roles[0].name} disabled/>
                  </div>
                </div>
              </div>
              :
              <></>
          }
          
          <Divider></Divider>
          <div className="row m-3">
            <div className="col-3">
              <label htmlFor="nombreUser" className="form-control">Ingrese una fecha:</label>
            </div>
            <div className="col-6">
              <input 
                type="date" 
                className="form-control" 
                name="fecha" 
                id="fecha-log" 
                onChange={(event)=>{
                  setFecha(event.target.value)
              }}
                value={fecha}
              />
            </div>
            <div className="col-3">
              <div 
                onClick={()=>{
                  consultarLogs('log/usuario', fecha)
                }}
                className="btn btn-outline-success w-100"
              >Buscar
              </div>
            </div>
          </div>
          <Divider></Divider>
          <TablaLog
            log={logs}
            http={http}
            setImagenUrlUser={setImagen}
            setOpen={setOpen}
          ></TablaLog>
        </div>  
          <ImagenLog
              open={open}
              setOpen={setOpen}
              baseURL={baseURL}
              imagen={imagen}
          >
          </ImagenLog>
      </div>
    </div>
  );
}
export default ActividadLog;