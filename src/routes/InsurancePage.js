import React from 'react'
import Fade from 'react-reveal/Fade';
import Navbar from '../components/navbar/Navbar'
import Insurance from '../components/insurance/Insurance'
import Footer from '../components/footer/Footer'
import InsuranceLogos from '../components/insurance/InsuranceLogos'

import MolinaHealthCare from '../assets/molina-healthcare.png'
import Aetna from '../assets/aetna.png'
import Beacon from '../assets/beacon.png'
import Bluecross from '../assets/bluecross.png'
import Cigna from '../assets/cigna.png'
import MHN from '../assets/mhn.png'
import United from '../assets/united-healthcare.png'




const InsurancePage = () => {
    return (
        <>
           <Navbar /> 
           <Insurance />

        <div className='insuranceLogos'>
            <Fade top>
            <InsuranceLogos Image = { MolinaHealthCare }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { Aetna }/>
            </Fade>

            <Fade top>
            <InsuranceLogos Image = { Beacon }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { Bluecross }/>
            </Fade>

            <Fade top>
            <InsuranceLogos Image = { Cigna }/>
            </Fade>

            <Fade bottom>
            <InsuranceLogos Image = { MHN }/>
            </Fade>
            
            <Fade top>
            <InsuranceLogos Image = { United }/>
            </Fade>
        </div>




           <Footer />
        </>
    )
}

export default InsurancePage
