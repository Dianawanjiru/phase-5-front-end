import './App.css';
import React from 'react';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './components/appointment/Appointment';
import CarListing from './components/hire/CarListing';
import Details from './components/pages/Details';
import Error from './components/error-page/Error';
import Payment from './components/pages/payment/CardPayment';
import AllPayment from './components/pages/payment/AllPayments';
import Mpesa from './components/pages/payment/Mpesa';

import Home from './Home /Home';
import About from './Home /About';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contacts' element={<Contact/>}></Route>
          <Route path='/services/appointment' element={<Appointment />}></Route>
          <Route path='/services/hire' element={<CarListing />}/>
          <Route path="/cars/:slug" element={<Details />}/>
          <Route path="*" element={<Error />} />
          <Route path="/cars/:slug/payment" element={<AllPayment />} />
          <Route path="/cars/:slug/payment/card" element={<Payment/>} />
          <Route path="/cars/:slug/payment/mpesa" element={<Mpesa/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
