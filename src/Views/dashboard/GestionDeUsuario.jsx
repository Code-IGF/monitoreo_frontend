import MoreVertIcon from '@mui/icons-material/MoreVert';
function GestionDeUsuario(){
    return (
        <div>
            <div className="container text center" ></div>
            <h2>Administracion de Usuario</h2>

            {/* Tabla  */}
          <div className="pt-5">
            <table class="table table-hover table-bordered">
              <thead className='table-primary'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre Equiipo</th>
                  <th scope="col">Area</th>
                  <th scope="col">Supervisor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Equipo5</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td><MoreVertIcon></MoreVertIcon></td>
                </tr>
              </tbody>
            </table>
            
        </div>
        
        </div>
    );
}
export default GestionDeUsuario;