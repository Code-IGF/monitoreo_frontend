import RowUsuarios from "./RowUsuarios";

const TeblaUsuarios=({usuarios, setDeleteId, selectEditData})=>{
    if(usuarios){
        return(
        <table className="table table-hover table-bordered text-center">
            <thead className='table-primary'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fecha de Nacimiento</th>
                    <th scope="col">Actiones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(dato=>(
                    <RowUsuarios key={dato.id}
                        setDeleteId={setDeleteId}
                        dato={dato}
                        selectEditData={selectEditData}
                    >
                    </RowUsuarios>
                ))}
            </tbody>
        </table>
        )
    }
    else{
        return(
        <table className="table table-hover table-bordered text-center">
            <thead className='table-primary'>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fecha de Nacimiento</th>
                    <th scope="col">Actiones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={6}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        );
    }
}
export default TeblaUsuarios;