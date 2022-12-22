import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Contact/>
        <Footer />
        <Routes>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
