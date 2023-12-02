import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { DoctorType } from '../models';

type props = {
    doctor:DoctorType
    deleteDoctor: (id:number) => void
}

function DeleteDialog({deleteDoctor, doctor}:props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
    <Button startIcon={<DeleteIcon/>} variant="contained" color="error" onClick={handleClickOpen}>
      delete
    </Button>
    <Dialog
      sx={{height:400}}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
     
      <DialogContent>
        <DialogContentText>
        Are you sure you want to delete this this doctor from record?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color="error" autoFocus onClick={()=> {
            deleteDoctor(doctor.id)
            handleClose()
            }}>
          yes
        </Button>
        <Button variant='contained' onClick={handleClose} autoFocus>
          no
        </Button>
      </DialogActions>
    </Dialog>
  </>
  )
}

export default DeleteDialog