import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';



const home = () => {
  return (
    <>
    <Cards />
    <WhatWeDo />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
