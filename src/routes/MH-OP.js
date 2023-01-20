import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MHOP from '../components/MH-op/Op'
import MHOpSection from '../components/MH-op/OpSection'


const Op = () => {
  return (
    <>
    <Navbar /> 
    <MHOP />
    <MHOpSection />
    <Footer />
     </>
  )
}

export default Op