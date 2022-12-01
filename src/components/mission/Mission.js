import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Mission.css'

const Mission = () => {
    return (
        <div className='mission'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>MISSION</h1>
                    </Fade>
                    <Fade bottom>
                    <p>We strive to make overcoming addiction achievable by focusing on your comfort and safety above all. We use evidence-based medical practices and a holistic, comprehensive approach to healing through guidance, compassion, and community.</p>
                    </Fade>
                <div>
                <Link to="/treatment">
                    <button>Learn More</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Mission
