import React from "react";
import { useState } from "react";
import AuthUser from "../../../components/AuthUser";
import TablaEquipos from "./TablaEquipos";
import { NavLink } from "react-router-dom";

//
import { Button, 
    
 } from "@mui/material";

//Iconos
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const GestionDeEquipo = ()=>{

    const [basicModal, setBasicModal] = useState();
    const toggleShow = () => {
        setBasicModal(!basicModal);}
    
    //http
    const {http}=AuthUser();

    return(
        <div className="container pt-5">
          <div className="row">
              <div className="col">
                  <h2>Administración de Equipos</h2>
              </div>
              <div className="col text-end">
                  {/*Boton para abrir modal*/}
                  <NavLink to="/equipos/nuevo" className="nav-link">
                    <Button 
                        variant="outlined" 
                        startIcon={<GroupAddIcon/>}
                        onClick={toggleShow}
                        >
                        Crear nuevo Equipo
                    </Button>
                  </NavLink>
              </div>
          </div>
        {/*Tabla*/}    
        <TablaEquipos
            http={http}
        >
        </TablaEquipos>
          </div>  
        );
    }
    
    
    export default GestionDeEquipo;