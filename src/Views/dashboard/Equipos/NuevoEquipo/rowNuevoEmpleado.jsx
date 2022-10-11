import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';

const RowNuevoEmpleado=({dato, elminiarSeleccion})=>{
    const {id, name}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <IconButton
                    onClick={()=>elminiarSeleccion(dato)}
                >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>    
            </td> 
        </tr>
    );
}
export default RowNuevoEmpleado;