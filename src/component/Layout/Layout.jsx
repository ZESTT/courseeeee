import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-6 py-6">
        <Outlet></Outlet>
      </div>
      {/* <Footer/> */}
      {/* <Footer/> */}
      
    </>
  )
}
