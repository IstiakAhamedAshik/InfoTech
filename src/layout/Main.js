import React from 'react'
import Navbar from '../components/navbar/Navbar'
// import { Outlet } from 'react-router-dom'
import Home from '../pages/home/Home'

import Service from '../pages/service/Service'
import About from '../pages/about/About'
import Embaded from '../pages/embaded/Embaded'

const Main = () => {
  return (
    <>
      <Navbar />
      <Home></Home>
      <About></About>
      <Service></Service>
      <Embaded></Embaded>
      {/* <Outlet /> */}
    </>
  )
}

export default Main
