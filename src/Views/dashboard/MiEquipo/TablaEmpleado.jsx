import RowEmpleado from "./RowEmpleado";
const TablaEmpleado = ({empleados, baseURL})=>{
    return(
        <table className="table table-hover table-bordered text-center">
            <thead className='table-primary'>
                <tr>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Opciones</th>
                </tr>
            </thead>  
            <tbody>
                {empleados.map(dato=>(
                   <RowEmpleado
                        key={dato.id}
                        empleado ={dato}
                        baseURL={baseURL}
                   ></RowEmpleado>
                ))}
            </tbody>
        </table>
    )
}
export default TablaEmpleado;