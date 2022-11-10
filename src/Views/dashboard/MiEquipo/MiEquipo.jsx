import { 
    useState,
    useEffect
} from "react";
import AuthUser from "../../../components/AuthUser";
import CardEquipo from "./CardEquipo";
import { 
    Paper,
    Card
 } from "@mui/material";
import { blue } from '@mui/material/colors';

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
        // eslint-disable-next-line 
    },[])

    return (
        <div className="container-fluid p-5">
            <Paper
                className="mb-3" 
                square={true} 
                elevation={3}
                sx={{ 
                    bgcolor: blue[600] 
                }}
                >
                <div className="text-center text-white fw-bold fs-6">
                    Mis Equipos
                </div>
            </Paper>
            <Card>
            {
                misEquipos.map((equipo)=>(
                    <CardEquipo 
                        equipo={equipo}
                    />
                ))
            }
            </Card>




        </div>
    )
}
export default MiEquipo;