import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfiguracionSala({open, handleClose, horaInicio, setHoraInicio, horaFin, setHoraFin, intervalo, setIntervalo, actualizarConfiguracion}) {
    
    
  /* 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };*/
  const cerrarDialog = () => {
    actualizarConfiguracion();
    handleClose();
  }; 
  

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Configurar Sala de Trabajo </DialogTitle>
        <DialogContent>
        <div className="mb-4">
            <label className="form-label">Ingrese la hora en entrada de esta sala.</label>
            <input 
                type="time" 
                className="form-control" 
                id="inicio"
                onChange={(event)=>{
                    setHoraInicio(event.target.value)
                }}
                value={horaInicio}
            />
        </div>
        <div className="mb-4">
            <label className="form-label">Ingrese la hora en salida de esta sala.</label>
            <input 
                type="time" 
                className="form-control" 
                id="fin"
                onChange={(event)=>{
                    setHoraFin(event.target.value)
                }}
                value={horaFin}
            />
        </div>
        <div className="mb-4">
            <label className="form-label">Ingrese el intervalo de tiempo con el que se verificara la actividad de los usuarios.</label>
            <input 
                type="time" 
                className="form-control" 
                onChange={(event)=>{
                    setIntervalo(event.target.value)
                }}
                value={intervalo}
            />
        </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={cerrarDialog}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
