import React from 'react'
import Fade from 'react-reveal/Fade';

import './Iop.css'

import Wave from '../../assets/waves.svg'


const IOP = () => {
    return (
        <>
        <div className='iop submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="iop-content">
                    <Fade top>
                    <h2>- MENTAL HEALTH</h2>
                    <h1>Intensive Outpatient Program</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default IOP
