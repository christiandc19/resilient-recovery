import React from 'react'
import Fade from 'react-reveal/Fade';

import PhpSection1 from '../../assets/PhpSection1.jpg'
import PhpSection2 from '../../assets/PhpSection2.jpg'

import Contact2 from '../contact/Contact2'


const PhpSection = () => {
  return (
    <>
<div className='wrap'>
    <Fade left>
    <div className="box box-left">
        <h1 className='header'>WHAT IS PHP</h1>
        <br/>
        <p>A treatment plan that can be highly beneficial for those who have supportive family members at home and responsibilities that they must maintain during the week, the partial hospitalization program offers structured addiction treatment that runs several hours daily throughout the week. Through this treatment option, you can participate in treatment sessions during the day and return to your home at night. 
        <br /> <br />
        One of the first steps that you should take is to talk to our addiction treatment admissions team. They will provide a formal assessment to determine what level of treatment is right for your needs. For instance, we may recommend a partial hospitalization program if you meet these criteria:</p>
        <br />
        <ul>
            <li><p>You are medically stable.</p></li>
            <li><p>You’re not at risk of harming others or yourself.</p></li>
            <li><p>You have difficulty functioning at school, work, or home.</p></li>
            <li><p>You’re motivated to engage in our treatment program.</p></li>
            <li><p>You’re experiencing co-occurring substance use disorders and mental health concerns.</p></li>
            <li><p>You have sufficient support in your home life.</p></li>
        </ul>
        <br />
        <p>Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.</p>

    </div>
    </Fade>
    <Fade right>
    <div className="box">
        <img src={PhpSection1} width="600px" height="500px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>
</div>
    

{/* SECTION 2 */}

<div className='wrap'>
<Fade left>
    <div className="box">
        <img src={PhpSection2} width="600px" height="380px" alt="Palm Springs Rehab Logo" loading="lazy" />
    </div>
    </Fade>


    <Fade right>
    <div className="box box-left">
        <h1 className='header'>WHAT TO EXPECT THROUGHOUT THE PROGRAM</h1>
        <br/> <br/>
        <p>Consisting of 5 hours of clinical services (5 days per week), the PHP has the highest level of care we provide. Throughout treatment, patients will participate in four daily group therapy sessions, as well as individual therapy at least once a week. Additionally, all patients meet with our medical director on a weekly basis to discuss medication management (if applicable).  
        <br /> <br />
        Patients are served lunch between group sessions and can participate in weekly recovery outings as well. For anyone starting their journey to sobriety, this level of care is recommended, as it is best to have a strong foundation of support built. </p>
        <br />

    </div>
    </Fade>
</div>



<Contact2 />

    </>
  )
}

export default PhpSection
