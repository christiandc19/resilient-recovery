import React from "react";
import Fade from 'react-reveal/Fade';
import ContactForm from "../contact/ContactForm";

import './About.css'
import AboutSection from "./AboutSection";

import Wave from '../../assets/waves.svg'



const About = () => {

    return (
            <>



            <div className='about main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                        <div className="about-content">
                            <Fade top>
                                <h1>ABOUT US</h1>

                                {/* <p>Palm Springs Rehab Treatment Center strives to make sobriety less stressful by focusing on sobriety. We utilize established medical treatments to help you get sober and stay sober. Palm Springs Rehab Treatment Center helps you taper in a safe, structured environment. We are there for you, through every stage of recovery. No matter where you’re located, you can reach out and get in touch with someone from our staff today.</p> */}
                            </Fade>
                        </div>
                    </div>



            <AboutSection />
            <ContactForm />
            </>
    )

    }
export default About
