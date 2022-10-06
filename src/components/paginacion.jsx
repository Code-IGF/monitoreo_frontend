const Paginate = ({consultarData, paginaActual, paginaFinal, anterior, siguiente, baseUrl})=>{
    return(
    <nav aria-label="Page navigation example">
        {/**Si hay paginación */}
        {paginaActual?
            <ul className="pagination justify-content-end">
                {/*Boton para pagina anterior*/}
                <li className="page-item">
                    <button 
                        className="page-link"  
                        title="Previous"
                        onClick={()=>{
                            consultarData(anterior);
                        }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {paginaActual > 2?
                    <>
                    {/*Boton para pagina Inicial*/}
                    <li className="page-item">
                        <button className="page-link" 
                            onClick={
                                ()=>{
                                    consultarData(`${baseUrl}1`)
                                }
                            }
                        >1
                        </button>
                    </li>
                    <li className="page-item"><div className="page-link" >...</div></li>
                </>:""
                }
                {paginaActual !== 1?
                    <li className="page-item">
                        <button 
                            className="page-link" 
                            onClick={
                                ()=>{
                                    consultarData(`${baseUrl}${paginaActual-1}`)
                                }
                            }
                        >{paginaActual-1}</button>
                    </li>
                    : "" 
                }
                <li className="page-item active"><div className="page-link" >{paginaActual}</div></li>
                {
                    paginaActual < paginaFinal-1?
                        <li className="page-item">
                            <button className="page-link" 
                                onClick={
                                    ()=>{
                                        consultarData(`${baseUrl}${paginaActual+1}`)
                                    }
                                }
                            >{paginaActual + 1}</button>
                        </li>
                        : "" 
                }
                {
                    paginaActual !== paginaFinal?
                    <>
                        {/*Boton para pagina Final*/}
                        <li className="page-item"><div className="page-link" >...</div></li>
                        <li className="page-item">
                            <button className="page-link" 
                                onClick={
                                    ()=>{
                                        consultarData(`${baseUrl}${paginaFinal}`)
                                    }
                                }
                            >{paginaFinal}
                            </button>
                        </li>
                    </>:""
                }
                <li className="page-item">
                {/*Boton para pagina siguiente*/}
                <button  
                    className="page-link" 
                    title="Siguiente"
                    type="button"
                    onClick={siguiente? 
                        ()=>{
                            consultarData(siguiente)
                        }: console.log()
                    }
                >
                    <span aria-hidden="true">&raquo;</span>
                </button>
                </li>
            </ul>
            :
            <ul className="pagination justify-content-end">
                {/*Si no hay paginación*/}
                <li className="page-item"><div className="page-link" >...</div></li>
            </ul>
        }
    </nav>
    )
}
export default Paginate;