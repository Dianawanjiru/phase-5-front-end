import './App.css';
import React from 'react';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './components/appointment/Appointment';
import CarListing from './components/hire/CarListing';
import Details from './components/pages/Details';
import Error from './components/error-page/Error';
import Payment from './components/pages/Payment';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/contacts' element={<Contact/>}></Route>
          <Route path='/services/appointment' element={<Appointment />}></Route>
          <Route path='/services/hire' element={<CarListing />}/>
          <Route path="/cars/:slug" element={<Details />}/>
          <Route path="*" element={<Error />} />
          <Route path="/cars/:slug/payment" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
