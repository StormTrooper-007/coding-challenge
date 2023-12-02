import { Accordion, AccordionSummary, Typography, AccordionDetails, Button, Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import { DoctorEntryType, DoctorType } from "../models";
import DeleteDialog from "./DeleteDialog";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction} from "react";

type props = {
  doctor:DoctorType
  deleteDoctor:(id:number) => void
  doctorEditObj:DoctorEntryType
  setDoctorEditObj: Dispatch<SetStateAction<DoctorEntryType>>
  setEditItemId:Dispatch<SetStateAction<number>>
  setIsEditing:Dispatch<SetStateAction<boolean>>
}

function Doctor({doctor, deleteDoctor,
    setDoctorEditObj,
    setEditItemId,
    setIsEditing
  }:props) {


  const navigate = useNavigate()

  return (
      <Accordion sx={{p:2, m:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

        <Typography>Name: {doctor.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Email: {doctor.email}</Typography>
          <Typography> Phone: {doctor.phone}</Typography>
          <Typography>  Street: {doctor.street}</Typography>
          <Typography> City:{doctor.city}</Typography>
          <Typography>  State:{doctor.state}</Typography>
          <Typography>  Zip: {doctor.zip}</Typography>
        </AccordionDetails>
        <Box sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
        <Button variant="contained" startIcon={<EditIcon/>} onClick={() => {
          setEditItemId(doctor.id)
          setDoctorEditObj(doctor)
          setIsEditing(true)
          navigate("/add")
          }}>edit</Button>
        <DeleteDialog deleteDoctor={deleteDoctor} doctor={doctor}/>
        </Box>
      </Accordion>
  )
}

export default Doctor