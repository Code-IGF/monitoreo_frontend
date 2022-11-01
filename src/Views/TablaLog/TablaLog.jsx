import RowLog from "./RowLog";
import { useEffect } from "react";
import { useState } from "react";

const TablaLog=({http})=>{
    const [log, setlog]=useState(

    );
    
    const consultarEquipos = (url)=>{

        http.get(url).then(
            (res)=>{
                console.log(res.data.data)
                setlog(res.data.data)
                
            }
        );
    }
    useEffect(()=>{
        consultarEquipos('/equipos/paginate');
        // eslint-disable-next-line 
    },[]);


    return (
        log ? 
        <div className="pt-5">
            {/* If */ }
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
             {
                log.map(data =>(
                    <RowLog dato={data}
                     key={data.id}>
                         
                    </RowLog>
                ))
             }

            
            </tbody>
        </table>
       
    </div>
        
        
        :  

        <div className="pt-5">
                {/* Else */ }
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