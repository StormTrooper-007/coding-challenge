import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import BreadCrumb from "../components/BreadCrumb"

function Root() {
  return (
    <div>
      <Navbar/>
      <BreadCrumb/>
    
      <Outlet/>
    </div>
   
  )
}

export default Root