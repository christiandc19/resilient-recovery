import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

// import BgVideo from '../../assets/hero-vbg.mp4'

import waves from '../../assets/waves.svg'



const Hero = () => {
    return (
<>        



        <div className='hero'>

        <div className='hero-divider'>
                <img src={waves} loading="lazy" repeat-x alt='wave divider'/>
            </div>


            <div className="hero-container">
                <div className="content">
                        <h1 className="animate-charcter">RESILIENT RECOVERY</h1>
                    <Fade left>
                        <h2 className='subtitle'>Substance Abuse Addiction and <br/>Mental Health Treatment Facility</h2>
                    </Fade>
                        <br />
                        <div className='hero-btn'>
                        <Link to="/contact">
                        <button>Get an Appointment</button>
                    </Link>
                    </div>
                    <br />
                    <Fade bottom>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                </div>
            </div>
        </div>


</>

    )
}

export default Hero