import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './PortfolioContainer/Home/Footer/Footer';
import Home from './PortfolioContainer/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/Home/bgGradient.avif';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Contact from './PortfolioContainer/Home/ContactMe/Contact';
import {FaAddressBook, FaBlog, FaBoxes, FaFileContract, FaHome, FaList, FaLocationArrow, FaMapMarker, FaSearch, FaShoppingCart, FaWarehouse} from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App" style = {{ "display": "flex", "align-items": "center", "justify-content": "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Routes>
          <Route path="/profile" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
