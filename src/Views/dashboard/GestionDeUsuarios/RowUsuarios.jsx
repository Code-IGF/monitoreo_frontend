import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';

const RowUsuarios=({dato, setDeleteId, selectEditData})=>{
    const {id, name, email, imagen, fecha_nacimiento}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>{imagen}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{fecha_nacimiento}</td>
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
export default RowUsuarios;