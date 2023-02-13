import React from 'react'
import Fade from 'react-reveal/Fade';

import './SA.css'

import Wave from '../../assets/waves.svg'


const SA = () => {
    return (
        <div className='sa submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="sa-content">
                    <Fade top>
                    <h2>- OUR SERVICES</h2>
                    <h1>SUBSTANCE ABUSE PROGRAMS</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default SA
