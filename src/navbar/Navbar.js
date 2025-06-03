import React, { useState } from 'react';
import './Navbar.css';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../home/Home';
import About from '../about/About';
import Carddetails from '../card details/Carddetails';
import Services from '../services/Services';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Viewdetails from '../viewdetails/Viewdetails';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/006/511/673/non_2x/train-logo-icon-illustration-design-vector.jpg" alt="Metro Illustration" className="metro-image" />
        </div>
        <button className="dropdown-button" onClick={toggleDropdown}>
          ☰
        </button>
        <ul className={`nav-links ${isDropdownOpen ? 'show' : ''}`}>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/About">Metro details</Link></li>
          <li><Link to="/Services">Booking Ticket</Link></li>
          <li><Link to="/Carddetails">Card details</Link></li>
          <li><Link to="/Registration">Registration</Link></li>
          <li><Link to="/Viewdetails">Viewdetails</Link></li>
          <li><button className='nav-links button'><Link to="/Login">Login</Link></button></li>
        </ul>
      </div>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Carddetails' element={<Carddetails />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Viewdetails' element={<Viewdetails />} />
      </Routes>
    </BrowserRouter>
  );
}
