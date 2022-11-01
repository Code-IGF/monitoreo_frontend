import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const RowLog=({dato, setDeleteId, selectEditData})=>{
    
    const {id, Fecha, descripcion, Hora}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{Fecha}</td>
            <td>{descripcion}</td>
            <td>{Hora}</td>
            <td>
                <NavLink to={`/LogDeUsuario/${id}`}>
                    <IconButton>
                        <AddAPhotoIcon/>
                    </IconButton>
                </NavLink>                
            </td> 
        </tr>
    );
}
export default RowLog;