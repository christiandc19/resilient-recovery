import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import Optima from '../../assets/optima.png'
import Umr from '../../assets/umr.png'
import United from '../../assets/united-healthcare.png'
import Optum from '../../assets/optum.png'
import Horizon from '../../assets/horizon.png'




import Form from '../../assets/form.pdf'



import { Link as LinkRoll } from 'react-scroll'



const InsuranceSection = () => {
    return (
        <div className='InsuranceSection'>
            <div className="container">
                <h1>WE WORK WITH MAJOR INSURANCE</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                <div className="content">

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Aetna} alt="Aetna Logo" loading="lazy" />
                        </div>
                    </Fade>


                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Beacon} alt="Beacon Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Bluecross} alt="Bluecross Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Cigna} alt="Cigna Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Optima} alt="Cigna Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Umr} alt="UMR Insurance Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={United} alt="Cigna Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Optum} alt="UMR Insurance Logo" loading="lazy" />
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className='insurance-thumbnail'>
                            <img src={Horizon} alt="Cigna Logo" loading="lazy" />
                        </div>
                    </Fade>



                </div>
            </div>


            <div className='form-cta container'>
            <p>Our professional team is here to assist you with any insurance related matters and to facilitate this process in any way possible. To find out if we accept your insurance, please download the form and submit your policy information thru email.</p>
            </div>
            <div className='cta'>
                
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/treatment">

                        <button>Learn More</button>
                    </Link>
                </LinkRoll>
                <button><a href={Form} download className="btn btn-primary">Download Form</a></button>
            </div>


        </div>
    )
}

export default InsuranceSection
