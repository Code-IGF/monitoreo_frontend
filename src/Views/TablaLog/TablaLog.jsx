import RowLog from "./RowLog";

const TablaLog=({log, setImagenUrlUser, setOpen})=>{
    return (
        log ? 
        <div className="m-3">
            {/* If */ }
        <table className="table table-hover table-bordered text-center">
            <thead className='table-primary'>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Archivo</th>                 
                </tr>
            </thead>  
            <tbody>
             {
                log.map(data =>(
                    <RowLog 
                        setOpen={setOpen}
                        dato={data}
                        setImagenUrlUser={setImagenUrlUser}
                        key={data.id}>
                    </RowLog>
                ))
             }

            
            </tbody>

        </table>
    </div>
        
        
        :  

        <div className="m-3">
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