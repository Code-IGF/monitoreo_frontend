import RowAreas from "./RowAreas";

const TablaAreas=({departamentos, setDeleteId, selectEditData})=>{
    if(departamentos){
        return(
        <tbody>
            {departamentos.map(dato=>(
                <RowAreas key={dato.id}
                    setDeleteId={setDeleteId}
                    dato={dato}
                    selectEditData={selectEditData}
                >
                </RowAreas>
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
export default TablaAreas;