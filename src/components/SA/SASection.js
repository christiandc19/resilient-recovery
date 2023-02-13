import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './SASection.css'

import Contact2 from '../contact/Contact2'

import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const MHSection = () => {
  return (
    <>




<div className="sa-cards-header container">
                <h1>RESILIENT RECOVERY OFFERS VARIOUS SUBSTANCE ABUSE PROGRAMS </h1>
                <p>At Resilient Recovery Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
            
<div class="sa-card-wrap">
<div class="sa-tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="sa-text">
  <h5>SUBTANCE ABUSE​</h5>
  <h1>Partial Hospitalizaion Program​</h1>
  <p class="sa-animate-text">Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety.</p>
    <div class="sa-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse-php">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

<div class="sa-tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="sa-text">
  <h5>SUBTANCE ABUSE​</h5>
  <h1>Intensive Outpatient Program</h1>
  <p class="sa-animate-text">No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Oxnard Rehab.</p>
  <div class="sa-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse-iop">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>

  </div>
 </div>
  
 
  <div class="sa-tile"> 

  <Fade right>
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="sa-text">
  <h5>SUBTANCE ABUSE​</h5>
  <h1>Outpatient Program</h1>
  <p class="sa-animate-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
  <div class="sa-animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse-op">
            <button>Learn More</button>
        </Link>
    </LinkRoll>

    </div>
  </div>
 </div>
</div>

<Contact2 />

    </>
  )
}

export default MHSection
