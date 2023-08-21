import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/navbar/footer/Footer'

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default Main
