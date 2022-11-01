import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';

const RowNuevoEmpleado=({dato, elminiarSeleccion})=>{
    const {id, name}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td 
                title='Eliminar'
            >
                <IconButton
                    color="error"
                    onClick={()=>elminiarSeleccion(dato)}
                >
                    <PersonRemoveIcon/>
                </IconButton>    
            </td> 
        </tr>
    );
}
export default RowNuevoEmpleado;