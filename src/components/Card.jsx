const Card=({Icon, dato, titulo})=>{
    return(
        <div className="card">
            <div className="badge bg-primary rounded-0 fs-6" role="alert">
                {titulo}
            </div>
            <div className="row align-items-center w-100">
                <div className="col align-items-center text-center">
                    <Icon color = "info" fontSize="large" />
                </div>
                <div className="col row">
                    <div className="text-center">
                    {dato}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;