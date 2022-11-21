import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import VideocamIcon from '@mui/icons-material/Videocam';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Bienvenida({open, idSala, abrirCamara}) {
    
    
  /* 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };*/

   
  

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
                Para unirse a la sala es necesario que active su camara, 
                recuerde que se registrara el momento en que encienda su camara y 
                camparta su escritorio.
            </DialogContentText>
        </DialogContent>
        <DialogActions
            sx={{justifyContent:"center"}}
        >
            <Button 
                onClick={abrirCamara}
                startIcon={<VideocamIcon/>}>
                Activar Camara
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
