import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import VideocamIcon from '@mui/icons-material/Videocam';
import Slide from '@mui/material/Slide';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Bienvenida({open, idSala, abrirCamara,captureScreen}) {
    const navigate = useNavigate();
    const volver=()=>{
        navigate('/equipos/usuario')
    }
    const iniciar=()=>{
      abrirCamara();
      captureScreen();
    }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Bienvenido a sala {idSala}</DialogTitle>
        <DialogContent>
            <DialogContentText sx={{textAling:"justify"}}>
                Para unirse a la sala es necesario que active su camara y comparta su escritorio,
                registraremos cada cierto tiempo una imagen de su camara y escritorio.
            </DialogContentText>
        </DialogContent>
        <DialogActions
            sx={{justifyContent:"center"}}
        >
            <Button
                startIcon={<DoNotDisturbIcon/>}
                onClick={volver}
            >
                Regresar
            </Button>
            <Button 
                onClick={iniciar}
                startIcon={<VideocamIcon/>}>
                Entrar en sala
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
