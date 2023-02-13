import React from "react";
import Fade from 'react-reveal/Fade';

import './Insurance.css'
import Wave from '../../assets/waves.svg'



const Insurance = () => {

    return (
            <>
            <div className='insurance main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                        <div className="insurance-content">
                            <Fade top>
                                <h1>INSURANCE</h1>
                            </Fade>
                        </div>
                    </div>



            </>
    )

    }
export default Insurance




