import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImagenLog({open, setOpen, baseURL,imagen}) {
    const cerrar=()=>{
        setOpen(false)
    }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        
        maxWidth="md"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
            <DialogContentText sx={{justifyContent:"center"}}>
                <img src={`${baseURL}${imagen}`} className="img-fluid" alt="" />
            </DialogContentText>
        </DialogContent>
        <DialogActions
            sx={{justifyContent:"center"}}
        >
            <Button
                onClick={cerrar}
            >
                Cerrar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}