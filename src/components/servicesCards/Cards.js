import React from 'react'
import './Cards.css'

import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

import Fade from 'react-reveal/Fade';


import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <>

            <div className="cards-header container">
                <h1>WE OFFER VARIOUS SERVICES </h1>
                <p>At Resilient Recovery Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
<div class="card-wrap">
<div class="tile"> 
  <Fade left>
  <img src={Card1} alt="Mental Health" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>MENTAL HEALTH TREATMENT​</h1>
  <p class="animate-text">Some of our clients are here to attend to their mental health, and some come to us for help with addiction and sobriety. Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
    <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mental-health">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>
  </div>
 </div>

<div class="tile"> 
<Fade top>
<img src={Card2} alt="Substance Use" loading="lazy"/>
</Fade>
  <div class="text">
  <h1>SUBSTANCE ABUSE TREATMENT</h1>
  <p class="animate-text">No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone at Palm Springs Rehab.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/substance-abuse">
            <button>Learn More</button>
        </Link>
    </LinkRoll>
    </div>

  </div>
 </div>
  
  <div class="tile"> 

  <Fade right>
  <img src={Card3} alt="Warehouse Employees" loading="lazy"/>
  </Fade>
  <div class="text">
  <h1>EMPLOYMENT ASSISTANCE</h1>
  <p class="animate-text">We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.</p>
  <div class="animate-text">
    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/jobs">
            <button>Learn More</button>
        </Link>
    </LinkRoll>

    </div>
  </div>
 </div>
</div>
  
    </>
  )
}

export default Cards
