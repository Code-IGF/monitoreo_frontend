
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

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
                        <AddIcon/>
                    </IconButton>
                </NavLink>                
            </td> 
        </tr>
    );
}
export default RowEquipo;