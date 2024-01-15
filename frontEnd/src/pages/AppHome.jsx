import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

function AppHome() {
  return (
    <>
   <Navbar/>
   <Outlet/>
    </>
  
  )
}

export default AppHome