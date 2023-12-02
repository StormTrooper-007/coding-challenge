import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from '@mui/icons-material/Cancel'
import axios, { AxiosError } from "axios"
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { DoctorEntryType, DoctorType } from "../models"

type props = {
  allDoctors: DoctorType[]
  doctorEditObj: DoctorEntryType
  setDoctorEditObj: Dispatch<SetStateAction<DoctorEntryType>>
  editing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  editItemId: number
  setEditItemId: Dispatch<SetStateAction<number>>
  lengthDoctors: number
  setLengthDoctors: Dispatch<SetStateAction<number>>
}

function AddDoctorForm({
  doctorEditObj,
  editing,
  setIsEditing,
  editItemId,
  setEditItemId,
  lengthDoctors,
  setLengthDoctors,
}: props) {
  const initialDoctorEntry: DoctorEntryType = {
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  }

  const [doctorEntry, setDoctorEntry] = useState<DoctorEntryType>(
    editing ? doctorEditObj : initialDoctorEntry
  )
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  console.log(lengthDoctors)
  console.log(doctorEntry)

  function retrieveIdValueFromLocalStorage() {
    const retrievedValue = localStorage.getItem("lengthDoctors")
    if (retrievedValue) {
      setLengthDoctors(JSON.parse(retrievedValue))
    }
  }

  function saveNewDoctor(event: FormEvent) {
    retrieveIdValueFromLocalStorage()
    event.preventDefault();
    axios
      .post("http://localhost:5173/api/doctors", {
        id:lengthDoctors + 1,
        ...doctorEntry
      })
      .then((response) => {
        if(response){
          setSuccessMessage("new doctor created successfully")
          setDoctorEntry(initialDoctorEntry)
          setTimeout(() => setSuccessMessage(""), 5000)
        }
      })
      .catch((error: AxiosError) => {
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(""), 5000)
      });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setDoctorEntry((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleEditDoctor(event: FormEvent) {
    event.preventDefault();
    axios
      .put(`http://localhost:5173/api/doctors/${editItemId}`, {
        editItemId,
        ...doctorEntry,
      })
      .then((response) => {
        if (response.status === 200) {
          setSuccessMessage(`doctor with id ${editItemId} is updated`)
          setIsEditing(false)
          setEditItemId(0)
          setDoctorEntry(initialDoctorEntry)
          setTimeout(() => setSuccessMessage(""), 5000)
        }
      })
      .catch((error: AxiosError) => {
        setErrorMessage(error.message)
        setIsEditing(false);
        setEditItemId(0);
        setDoctorEntry(initialDoctorEntry);
        setTimeout(() => setErrorMessage(""), 5000)
      });
  }

  function cancelEdit(){
    setIsEditing(false);
    setEditItemId(0);
    setDoctorEntry(initialDoctorEntry)
  }


  return (
    <>
      {errorMessage != "" && (
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      )}
      {successMessage != "" && (
        <Alert variant="filled" severity="success">
          {successMessage}
        </Alert>
      )}
      <Box
        component="form"
        onSubmit={editing ? handleEditDoctor : saveNewDoctor}
      >
        <Paper
          sx={{
            p: 2,
            m: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography variant="h4">Doctors entry</Typography>
          <TextField
            sx={{ m: 2 }}
            label="Name"
            variant="outlined"
            name="name"
            value={doctorEntry.name}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="Email"
            variant="outlined"
            name="email"
            value={doctorEntry.email}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="Phone"
            variant="outlined"
            name="phone"
            value={doctorEntry.phone}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="Street"
            variant="outlined"
            name="street"
            value={doctorEntry.street}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="City"
            variant="outlined"
            name="city"
            value={doctorEntry.city}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="State"
            variant="outlined"
            name="state"
            value={doctorEntry.state}
            onChange={handleInputChange}
          />

          <TextField
            sx={{ m: 2 }}
            label="Zip"
            variant="outlined"
            name="zip"
            value={doctorEntry.zip}
            onChange={handleInputChange}
          />

          <Box sx={{display:"flex"}}>
          {editing && 
          <Button
           startIcon={<CancelIcon/>} 
           variant="contained"
           sx={{ ml:5, width: 100}}
           onClick={cancelEdit}
           >Cancel</Button>}
          <Button
            type="submit"
            variant="contained"
            sx={{ ml: 5, width: 100 }}
            startIcon={<SaveIcon />}
          >
            {editing ? "Update" : "Save"}
          </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default AddDoctorForm
