import React from 'react'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import InsuranceSection from './components/insurance/InsuranceSection';
import ContactForm from './components/contact/ContactForm';
import Home from './components/home/Home';
import ServicesCards from './components/services/ServicesCards'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ServicesCards />
      <InsuranceSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
