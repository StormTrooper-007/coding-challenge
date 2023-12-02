import { useState } from "react"
import { DoctorEntryType, DoctorType } from "./models"
import AddDoctorForm from "./pages/AddDoctorForm"
import ListDoctors from "./pages/ListDoctors"
import Root from "./pages/Root"

import { Route,
   RouterProvider, 
  createBrowserRouter,
   createRoutesFromElements
   } from "react-router-dom"

const initialDoctorEditObj:DoctorEntryType = {
  name:"", 
  email:"",
  phone:"",
  street:"",
  city:"", 
  state:"", 
  zip:""
}

function App() {

  const[allDoctors, setAllDoctors] = useState<DoctorType[]>([])
  const [doctorEditObj, setDoctorEditObj] = useState<DoctorEntryType>(initialDoctorEditObj)
  const [editItemId, setEditItemId] = useState<number>(0)
  const [editing, setIsEditing] = useState<boolean>(false)
  const [lengthDoctors,setLengthDoctors] = useState<number>(0)

  console.log(lengthDoctors)
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Root/>}>
      <Route index element={<ListDoctors 
       allDoctors={allDoctors}
       setAllDoctors={setAllDoctors}
       doctorEditObj={doctorEditObj}
       setDoctorEditObj={setDoctorEditObj}
       setEditItemId={setEditItemId}
       setIsEditing={setIsEditing}
       setIdValue={setLengthDoctors}
      />}></Route>

      <Route path="/add" element={
      <AddDoctorForm
        doctorEditObj={doctorEditObj}
        setDoctorEditObj={setDoctorEditObj}
        allDoctors={allDoctors}
        editing={editing}
        setIsEditing={setIsEditing}
        editItemId={editItemId}
        setEditItemId={setEditItemId}
        lengthDoctors={lengthDoctors}
        setLengthDoctors={setLengthDoctors}
        />}></Route>
      </Route>
      </>
    )
  )
  return (
 <div>
  <RouterProvider router={router}/>
 </div>

  )
}

export default App
