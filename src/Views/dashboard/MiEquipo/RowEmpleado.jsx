const RowEmpleado =({empleado,baseURL})=>{
    return(
        <tr>
            <td>
                <img 
                    src={`${baseURL}${empleado.imagen}`}
                    alt="Imagen de perfil"
                    height="35px"
                    width="35px"
                />
            </td>
            <td>{empleado.name}</td>
            <td></td>
        </tr>
    )
}
export default RowEmpleado;