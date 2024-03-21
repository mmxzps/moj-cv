import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Layout = () => {
  return (
    <>
    <Aside/>
    <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout