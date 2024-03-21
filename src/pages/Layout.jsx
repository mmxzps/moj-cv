import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import Thumbsup from '../assets/pictures/profb.png'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Layout = () => {
  return (
    <>
    <Aside/>
    {/* <Header/> */}
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout