import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { IconButton } from '@mui/material';

const RowUsuarios=({dato, setDeleteId, selectEditData, baseURL})=>{
    const {id, name, email, imagen, fecha_nacimiento, roles}=dato
    return(
        <tr>
            <td>{id}</td>
            <td>
                <img 
                    src={`${baseURL}${imagen}`} 
                    alt="Imagen de perfil"
                    height="35px"
                    width="35px"
                    />
            </td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{fecha_nacimiento}</td>
            <td>{roles[0]? roles[0].name: "Indefinido"}</td>
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