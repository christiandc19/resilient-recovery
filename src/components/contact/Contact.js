import React from "react";
import Fade from 'react-reveal/Fade';
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


import './Contact.css';
import ContactForm from "./ContactForm";


const Contact = () => {

    return (
      <>

<div className='contact-hero'>
       <div className="container">
            <div className="content">
            <Fade top>
                    <h1>Have Some Questions?</h1>
            </Fade>
            </div>
     </div>
</div>

      <ContactForm />

      </>
    )
}



export default Contact