import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "../main";

function Root() {
  return (
    <ThemeProvider theme={darkTheme}>
        <Navbar />
        <BreadCrumb />
        <Outlet />
    </ThemeProvider>
  );
}

export default Root;
