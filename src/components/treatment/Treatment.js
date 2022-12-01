import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Treatment.css'

import { RiMovieFill } from 'react-icons/ri';
import { GiBowlingStrike } from 'react-icons/gi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { FaGolfBall } from 'react-icons/fa';
import { IoIosBonfire } from 'react-icons/io';
import { GiSparkles } from 'react-icons/gi';
import { MdSportsSoccer } from 'react-icons/md';
import { FaHiking } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';
import { MdVolunteerActivism } from 'react-icons/md';
import { FaHandPointRight } from 'react-icons/fa';

const Treatment = () => {
    return (
        <>

            {/* -------------------------------- HERO -------------------------------------- */}

            <div className='treatment'>
                <div className="container">
                    <div className="content">
                        <Fade right>
                            <h1>TREATMENT</h1>
                        </Fade>
                        <Fade left>
                            <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and reassessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director. </p>
                        </Fade>
                        <div>
                            <Link to="/contact">
                                <button>Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------- SECTION 1 -------------------------------------- */}


            <div className='keyAreas'>
                    <div className='container keyAreas-description'>
                        <Fade left>
                        <h1>KEY AREAS / FUNDAMENTALS</h1>
                        <br /> 
                        <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.
                        <br /><br />
                        
                        <p><FaHandPointRight /> Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                        </p>
                        
                        <p><FaHandPointRight /> Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc.
                        </p>
                         <p> 
                        <FaHandPointRight /> Counselor and client will set clear and tangible goals regarding above mentioned obstacles
                        </p>
                        
                        <p><FaHandPointRight /> Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.
                        </p>
                        <p>
                        <FaHandPointRight /> Counselor and client discuss systems for working through hurdles.
                        </p>
                        <p>
                        <FaHandPointRight /> Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.
                        </p>
                        </p>
                    </Fade>
                </div>
            </div>



            {/* ------------------------------ RECREATION --------------------------- */}



            <div className='activities'>
                <div className='activities-description'>
                        <br />
                        <Fade right>
                        <h1> REVISIONS </h1>
                        </Fade>

                            <br /> 
                            <p>As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary. </p>

                        <br />
                        <Fade left>
                        <h1> RECREATIONS </h1>
                        </Fade>
                        <br />
                        <p>During treatment we promote having fun in sobriety. Clients learn how to develop interests and hobbies that do not include drugs and alcohol. Clients must be cleared by the doctor to participate. Organized activities may include but are not limited to:                   </p><br />

                        <p><RiMovieFill /> Movies</p>
                        <p><GiBowlingStrike /> Bowling</p>
                        <p><FaUmbrellaBeach /> Beach/Lake Activities</p>
                        <p><FaGolfBall /> Minature Golf</p>
                        <p><IoIosBonfire /> Bonfires</p>
                        <p><GiSparkles /> Amusement Parks (Knott’s Berry Farm, Disneyland, Magic Mountain)</p>
                        <p><MdSportsSoccer /> Sporting events (Major League Baseball, National Hockey League, etc.)</p>
                        <p><FaHiking /> Hiking/Nature walks</p>
                        <p><MdPool /> Community pool</p>
                        <p><MdVolunteerActivism /> Sober events/fundraisers </p>
                        <br />
                        <p>For more information about our addiction treatment programs, please contact Joser Forever Treatment Facilty today.</p>

                        <div>
                                <button><a href='818-746-6867'>818-746-6867</a></button>
                        </div>

                </div>
            </div>


        </>
    )
}

export default Treatment
