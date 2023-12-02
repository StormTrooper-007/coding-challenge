import { Alert, Box, Typography } from "@mui/material"
import Doctor from "../components/Doctor"
import axios, { AxiosError } from "axios"
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DoctorEntryType, DoctorType } from "../models"
import Spinner from "../components/Spinner"

type props = {
  allDoctors: DoctorType[]
  setAllDoctors: React.Dispatch<React.SetStateAction<DoctorType[]>>
  doctorEditObj: DoctorEntryType
  setDoctorEditObj: React.Dispatch<React.SetStateAction<DoctorEntryType>>
  setEditItemId: Dispatch<SetStateAction<number>>
  setIsEditing: Dispatch<SetStateAction<boolean>>
};

function ListDoctors({
  allDoctors,
  setAllDoctors,
  doctorEditObj,
  setDoctorEditObj,
  setEditItemId,
  setIsEditing,
}: props) {
  const [loading, setIsLoading] = useState<boolean>(true)
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [deleting, setDeleting] = useState<boolean>(false)

  const fetchDoctors = useCallback(() => {
    let page: number = 1;
    let results: DoctorType[] = [];
    function fetchPage(): Promise<void> {
      return axios
        .get(`http://localhost:5173/api/doctors?page=${page}`)
        .then((response) => {
          const newData = response.data.results;
          if (newData.length === 0) {
            return Promise.resolve();
          }

          results = [...results, ...newData]

          page++;

          return fetchPage()
        });
    }

    fetchPage()
      .then(() => {
        setAllDoctors(results)
        setIsLoading(false)
      })
      .catch((error:AxiosError) => {
        setErrorMessage(error.message)
        setIsLoading(false)
      })
  }, [setAllDoctors])

  useEffect(() => {
    fetchDoctors()
    localStorage.setItem("lengthDoctors", JSON.stringify(allDoctors.length))
  }, [allDoctors.length, fetchDoctors, setAllDoctors])

  function deleteDoctor(id: number) {
    setDeleting(true)
    axios
      .delete(`http://localhost:5173/api/doctors/${id}`)
      .then((response) => {
        fetchDoctors()
        if (response.status === 200) 
        setSuccessMessage(`doctor with id ${id} deleted successfully`)
        setTimeout(() => {
          setSuccessMessage("")
          setDeleting(false)
        }, 5000)
      })
      .catch((error: AxiosError) => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage("")
          setDeleting(false)
        }, 5000)
      });
  }

  return (
    <Box>
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
      <Box>
        <Typography variant="h4">Doctor's Record</Typography>
        {loading && <Spinner />}
        {allDoctors.map((doctor: DoctorType) => (
          <Doctor
            key={doctor.id}
            doctor={doctor}
            deleteDoctor={deleteDoctor}
            doctorEditObj={doctorEditObj}
            setDoctorEditObj={setDoctorEditObj}
            setEditItemId={setEditItemId}
            setIsEditing={setIsEditing}
            deleting={deleting}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ListDoctors

