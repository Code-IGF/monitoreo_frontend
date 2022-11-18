
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const RowEquipo=({dato, setDeleteId, selectEditData})=>{
    const {id, nombre, descripcion, area,created_at}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{area.nombre}</td>
            <td>{created_at}</td>
            <td>
                <NavLink to={`/equipos/${id}`}>
                    <IconButton>
                        <EditIcon/>
                    </IconButton>
                </NavLink>                
            </td> 
        </tr>
    );
}
export default RowEquipo;