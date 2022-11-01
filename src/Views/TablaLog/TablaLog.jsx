import RowLog from "./RowLog";
import { useEffect } from "react";
const TablaLog=({http})=>{
    const consultarEquipos = (url)=>{
        http.get(url).then(
            (res)=>{
                console.log("consultando Equipos")
                
            }
        );
    }
    useEffect(()=>{
        consultarEquipos('/equipos/paginate');
        // eslint-disable-next-line 
    },[]);

    return (
        <div className="pt-5">
                <table className="table table-hover table-bordered text-center">
                    <thead className='table-primary'>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Archivo</th>                 
                        </tr>
                    </thead>  
                    <tbody>
                        
                        <tr>
                            <td colSpan={4}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
               
            </div>
    )
    
}


export default TablaLog;