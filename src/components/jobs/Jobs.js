import React from 'react'
import Fade from 'react-reveal/Fade';

import './Jobs.css'
import Wave from '../../assets/waves.svg'

import JobSection from '../../components/jobs/JobSection'

import Contact2 from '../contact/Contact2'

const Jobs = () => {
    return (
        <>
        <div className='jobs submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>

                <div className="jobs-content">
                    <Fade top>
                    <h2>- OUR SERVICES</h2>
                    <h1>EMPLOYMENT ASSISTANCE</h1>
                    </Fade>
                </div>
            </div>
        <JobSection />
        <Contact2 />
        </>
    )
}

export default Jobs