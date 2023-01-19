import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import BgVideo from '../../assets/hero-vbg.mp4'



const Hero = () => {
    return (
<>
        <div className='hero'>
             <video src={BgVideo} autoPlay muted loop playsInline className='video-bg' />

            <div className="hero-container">
                <div className="content">
                    
                    <h1>RESILIENT RECOVERY</h1>
                    {/* <div className='hero-logo'>
                    <Fade left>
                        <img src={ HeroLogo } alt="" />
                    </Fade>
                    </div> */}
                
                    <Fade bottom>
                        <h2 className='subtitle'>MENTAL HEALTH TREATMENT FACILITY</h2>
                        <p>Find your happiness and learn to put it first.</p>
                    </Fade>
                        <br />
                        <div className='home-btn'>
                        <Link to="/treatment">
                        <button>Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
        
        )
}

export default Hero
