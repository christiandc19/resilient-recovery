import React from 'react'
import Fade from 'react-reveal/Fade';

import './Php.css'

import Wave from '../../assets/waves.svg'


const PHP = () => {
    return (
        <>
        <div className='php submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="php-content">
                    <Fade top>
                    <h2>- MENTAL HEALTH</h2>
                    <h1>Partial Hospitalization Program</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default PHP

