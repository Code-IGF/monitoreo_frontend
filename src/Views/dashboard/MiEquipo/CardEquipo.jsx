import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import TablaEmpleado from './TablaEmpleado';
const CardEquipo = ({equipo, baseURL})=>{
    return(
        <div className="col-12">
            <div className="card m-2">
            <div className="badge bg-success rounded-0 fs-6" role="alert">
                {equipo.nombre}
            </div>
                {equipo.usuarios?
                    <TablaEmpleado
                        empleados={equipo.usuarios}
                        baseURL={baseURL}
                    >
                    </TablaEmpleado>
                    :
                    <>
                    </>
                }
            </div>
        </div>
    )
}
export default CardEquipo;