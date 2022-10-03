import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';

const RowAreas=({dato, setDeleteId, selectEditData})=>{
    const {id, nombre, descripcion, created_at}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>{created_at}</td>
            <td>
                <IconButton
                    onClick={()=>selectEditData(dato)}    
                >
                    <EditOutlinedIcon/>
                </IconButton>
                <IconButton
                    onClick={()=>setDeleteId(dato)}
                >
                    <DeleteOutlineOutlinedIcon/>
                </IconButton>
                
            </td> 
        </tr>
    );
}
export default RowAreas;