import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/contacts' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
