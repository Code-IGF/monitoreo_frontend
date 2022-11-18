import RowNuevoEmpleado from "./rowNuevoEmpleado";

const TablaNuevoEquipo=({empleados, setEquipoEmpleado, setDeleteId})=>{

    const elminiarSeleccion=(dato)=>{
        const newEmpleados=empleados.filter((item) => item !== dato);
        setEquipoEmpleado(newEmpleados);
        //console.log(newEmpleados)
    }

    if(empleados){
        return(
        <div className="pt-5">
            <table className="table table-hover table-bordered text-center">
                <thead className='table-primary'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Empleado</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>  
                <tbody>
                    {empleados.map(dato=>(
                        <RowNuevoEmpleado key={dato.id}
                            setDeleteId={setDeleteId}
                            dato={dato}
                            elminiarSeleccion={elminiarSeleccion}
                        >
                        </RowNuevoEmpleado>
                    ))}
                </tbody>
            </table>
        </div>
        )
    }
    else{
        return(
            <table className="table table-hover table-bordered text-center">
                <thead className='table-primary'>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre Empleado</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr>
                        <td colSpan={3}>
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
export default TablaNuevoEquipo;