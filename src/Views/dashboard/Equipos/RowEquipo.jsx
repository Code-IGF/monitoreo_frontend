import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const RowEquipo=({dato, setDeleteId, selectEditData})=>{
    const {id, nombre, descripcion, area,created_at}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{/**Reparar backend **/}</td>
            <td>{created_at}</td>
            <td>
                <NavLink to={`/equipos/${id}`}>
                    <IconButton>
                        <EditOutlinedIcon/>
                    </IconButton>
                </NavLink>                
            </td> 
        </tr>
    );
}
export default RowEquipo;