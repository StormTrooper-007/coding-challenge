import AddDoctorForm from "./pages/AddDoctorForm"
import ListDoctors from "./pages/ListDoctors"
import Root from "./pages/Root"

import { Route,
   RouterProvider, 
  createBrowserRouter,
   createRoutesFromElements
   } from "react-router-dom"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Root/>}>
      <Route index element={<ListDoctors/>}></Route>
      <Route path="/add" element={<AddDoctorForm/>}></Route>
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
