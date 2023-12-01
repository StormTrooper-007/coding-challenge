import { Box, Typography } from "@mui/material"
import Doctor from "../components/Doctor"


function ListDoctors() {
  return (
    <Box>
      <Typography variant="h4">Doctor Record</Typography>
        <Doctor/>
    </Box>
  )
}

export default ListDoctors