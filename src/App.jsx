import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css"


function App() {
  return (
    <>
      <div >
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
