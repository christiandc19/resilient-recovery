import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import TestimonialsHero from '../components/testimonials/TestimonialsHero'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'

const TestimonialsPage = () => {
    return (
        <>
           <Navbar /> 
           <TestimonialsHero />
           <TestimonialsSection /> 
           <Footer />
        </>
    )
}

export default TestimonialsPage
