import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';

function AddDoctorForm() {
  return (
    <Box component="form">
        <Paper sx={{p:2, m:2, display:"flex", flexDirection:"column", alignItems:"left"}}>
        <Typography variant="h4">Doctors entry</Typography>
            <TextField  sx={{m:2}} label="Name" variant="outlined" />
       
            <TextField sx={{m:2}} label="Email" variant="outlined" />
      
    
            <TextField  sx={{m:2}} label="Phone" variant="outlined" />
      
           
            <TextField  sx={{m:2}} label="Street" variant="outlined" />
     
        
            <TextField sx={{m:2}} label="City" variant="outlined" />
           
            <TextField sx={{m:2}} label="State" variant="outlined" />
          
            <TextField sx={{m:2}} label="Zip" variant="outlined" />

            <Button variant="contained" sx={{ ml: 5, width:100}} startIcon={<SaveIcon/>}>
                Save
            </Button>
        </Paper>
    </Box>
  )
}

export default AddDoctorForm