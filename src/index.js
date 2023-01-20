import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import MissionPage from './routes/MissionPage'
import AboutPage from './routes/AboutPage'
import InsurancePage from './routes/InsurancePage'
import ContactPage from './routes/ContactPage'
import SAPhp from './routes/SA-PHP';
import SAIop from './routes/SA-IOP';
import SAOp from './routes/SA-OP';

import MHPhp from './routes/MH-PHP';
import MHIop from './routes/MH-IOP';
import MHOp from './routes/MH-OP';

import Jobs from './routes/JOBS';




ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/substance-abuse-php' element={<SAPhp />} />
      <Route exact path='/substance-abuse-iop' element={<SAIop />} />
      <Route exact path='/substance-abuse-op' element={<SAOp />} />

      <Route exact path='/mental-health-php' element={<MHPhp />} />
      <Route exact path='/mental-health-iop' element={<MHIop />} />
      <Route exact path='/mental-health-op' element={<MHOp />} />


      <Route exact path='/jobs' element={<Jobs />} />

      <Route exact path='/treatment' element={<TreatmentPage />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/about-us' element={<AboutPage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

