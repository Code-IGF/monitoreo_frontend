import RowEquipo from "./RowEquipo";
import { useState } from "react";
import { useEffect } from "react";
import Paginate from "../../../components/paginacion";

const TablaEquipos=({roles, setDeleteId, selectEditData, http})=>{

    //Paginación
    const [equipos, setEquipos]=useState([]);
    const [siguiente, setSiguiente]=useState();
    const [anterior, setAnterior]=useState();
    const [actual, setActual]=useState();
    const [final, setFinal]=useState();

    const consultarEquipos = (url)=>{
        http.get(url).then(
            (res)=>{
                console.log("consultando Equipos")
                setActual(res.data.current_page);
                setAnterior(res.data.prev_page_url);
                setSiguiente(res.data.next_page_url);
                setFinal(res.data.last_page);
                setEquipos(res.data.data);
            }
        );
    }

    useEffect(()=>{
        consultarEquipos('/equipos/paginate');
        // eslint-disable-next-line 
    },[]);

    if(equipos){
        return(
        <div className="pt-5">
            <table className="table table-hover table-bordered text-center">
                <thead className='table-primary'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Equipo</th>
                    <th scope="col">Descripción Equipo</th>
                    <th scope="col">Área</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>  
                <tbody>
                    {equipos.map(dato=>(
                        <RowEquipo key={dato.id}
                            setDeleteId={setDeleteId}
                            dato={dato}
                            selectEditData={selectEditData}
                        >
                        </RowEquipo>
                    ))}
                </tbody>
            </table>
            <Paginate
                consultarData={consultarEquipos}
                paginaActual={actual}
                paginaFinal={final}
                anterior={anterior}
                siguiente={siguiente}
                baseUrl={"/usuarios/paginacion?page="}
            >
            </Paginate>
        </div>
        )
    }
    else{
        return(
            <table className="table table-hover table-bordered text-center">
                <thead className='table-primary'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Rol</th>
                    <th scope="col">Descripción Rol</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr>
                        <td colSpan={5}>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default TablaEquipos;