import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MHIOP from '../components/MH-iop/Iop'
import MHIopSection from '../components/MH-iop/IopSection'


const Iop = () => {
  return (
    <>
    <Navbar /> 
    <MHIOP />
    <MHIopSection />
    <Footer />
     </>
  )
}

export default Iop