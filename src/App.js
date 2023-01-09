import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './components/appointment/Appointment';
import CarListing from './components/hire/CarListing';
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/contacts' element={<Contact/>}></Route>
          <Route path='/services/appointment' element={<Appointment />}></Route>
          <Route path='/services/hire' element={<CarListing />}/>
          <Route path="/cars/:slug" element={<Details />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
