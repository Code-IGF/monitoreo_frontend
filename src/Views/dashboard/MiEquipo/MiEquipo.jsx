import { 
    useState,
    useEffect
} from "react";
import AuthUser from "../../../components/AuthUser";
import CardEquipo from "./CardEquipo";

const MiEquipo=({baseURL})=>{

    const {http}=AuthUser();
    const [misEquipos, setMisEquipos]=useState([]);

    const consultarMisEquipos=()=>{
        http.get("usuario/miEquipo").then((data)=>{
            data.data.equipo?
                //Si es un empleado
                setMisEquipos(data.data.equipo)
                :
                //Si es un supervisor
                setMisEquipos(data.data)
        });
    }

    useEffect(()=>{
        consultarMisEquipos();
    },[])

    return (
        <div className="container-fluid p-5">
            <div className="card">
                <div className="badge bg-primary rounded-0 fs-6" role="alert">
                    Mis Equipos
                </div>
                <div className="row">
                {
                    misEquipos.map((equipo)=>(
                        
                        <CardEquipo
                            key={equipo.id}
                            equipo={equipo}
                            baseURL={baseURL}
                        >
                        </CardEquipo>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default MiEquipo;