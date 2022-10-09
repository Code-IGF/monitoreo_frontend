const RegistroUsuario = () =>{
    return (
     
     <div> 
      <h2>Registro de usuario</h2>
 
      <form >
      <label>Nombre: </label>
       <input type="text" placeholder="Escriba su nombre" />
 
       <label>Apellido </label>
       <input type="text" placeholder="Escriba su apellido" />  
 
       <label>Correo: </label>
       <input type="text" placeholder="Escriba su correo" /> 
 
       <label>Contrasña: </label>
       <input type="password" placeholder="Escriba su contraseña" /> 
 
       <label>Confirmar contraseña: </label>
       <input type="password" placeholder="Escriba su contraseña otra vez" /> 
 
       <a href="#">Olvido su contraseña?</a>
 
      </form>
     
     
     </div>
   
    )
 
  }
  export default RegistroUsuario;