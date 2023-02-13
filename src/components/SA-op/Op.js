import React from 'react'
import Fade from 'react-reveal/Fade';

import './Op.css'

import Wave from '../../assets/waves.svg'


const OP = () => {
    return (
        <>
        <div className='op submenu'>

            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>

                <div className="op-content">
                    <Fade top>
                    <h2>- SUBSTANCE ABUSE</h2>
                    <h1>Outpatient Program</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default OP