import { Accordion, AccordionSummary, Typography, AccordionDetails, Button, Box } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Doctor() {
  return (
      <Accordion sx={{p:2, m:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         
          <Typography>Name: John Doe</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Email: johndoe@gmail.com</Typography>
          <Typography> Phone: johndoe@gmail.com</Typography>
          <Typography> Street: johndoe@gmail.com</Typography>
          <Typography> City: johndoe@gmail.com</Typography>
          <Typography> State: johndoe@gmail.com</Typography>
          <Typography> Zip: johndoe@gmail.com</Typography>
        </AccordionDetails>
        <Box sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
        <Button variant="contained" startIcon={<EditIcon/>}>edit</Button>
        <Button variant="contained" color="error" startIcon={<DeleteIcon/>}>delete</Button>
        </Box>
      </Accordion>
  )
}

export default Doctor