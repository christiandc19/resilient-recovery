import React from 'react'
import Fade from 'react-reveal/Fade';

import './MH.css'
import Wave from '../../assets/waves.svg'


const MH = () => {
    return (
        <>
        <div className='mh submenu'>
        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="mh-content">
                    <Fade top>
                    <h2>- OUR SERVICES</h2>
                    <h1>MENTAL HEALTH PROGRAMS</h1>
                    </Fade>
                    {/* <Fade bottom>
                    <p><br />
                    At  Palm Springs Rehab Treatment Center, we recognize that overcoming addiction on your own may not be possible. Fortunately our treatment programs give you the path to healing/recovery. Through our intensive outpatient program, we give you the tools to manage your addiction in the most healthy way possible. To learn more, reach out to us today. </p>
                    </Fade> */}
                </div>
            </div>
        </>
    )
}

export default MH
