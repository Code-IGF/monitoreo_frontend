import RowRoles from "./RowRoles";

const TablaRoles=({roles, setDeleteId, selectEditData})=>{
    if(roles){
        return(
        <tbody>
            {roles.map(dato=>(
                <RowRoles key={dato.id}
                    setDeleteId={setDeleteId}
                    dato={dato}
                    selectEditData={selectEditData}
                >
                </RowRoles>
            ))}
        </tbody>
        )
    }
    else{
        return(
        <tbody>
            <tr>
                <td colSpan={5}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </td>
            </tr>
        </tbody>
        );
    }
}
export default TablaRoles;