import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'

import Wave from '../../assets/waves.svg'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>

            <div className='hero-divider'>
                <img src={Wave} alt="wave divider" loading="lazy" repeat-x/>
            </div>

            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week. </p>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact