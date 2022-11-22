import { IconButton } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const RowLog=({dato, setImagenUrlUser, setOpen})=>{
    
    const {id, descripcion, created_at}=dato
    var now = new Date(created_at);

    const selectImagen=()=>{
        setImagenUrlUser(dato.archivo.url)
        setOpen(true)
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{descripcion}</td>
            <td>{now.toLocaleDateString()}</td>
            <td>{now.toLocaleTimeString()}</td>
            <td>
                {
                    dato.archivo?
                        <IconButton
                            onClick={selectImagen}
                        >
                            <AddAPhotoIcon/>
                        </IconButton>
                        :
                        ""
                }
            </td> 
        </tr>
    );
}
export default RowLog;