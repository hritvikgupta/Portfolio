import React, { useRef, useState } from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import {FaAddressBook, FaBlog, FaBoxes, FaFacebook, FaFacebookF, FaFileContract, FaGithub, FaHome, FaLinkedin, FaList, FaLocationArrow, FaMapMarker, FaNewspaper, FaSearch, FaShoppingCart, FaWarehouse} from "react-icons/fa";
import backgroundImage from "../../assets/Home/orangegradient.png";
import { Link } from 'react-router-dom';
import Contact from './ContactMe/Contact';
import * as Icon from 'react-bootstrap-icons';
import { Blogs } from './Blogs/Blogs';
import { Publication } from './Publication/Publication';
function Home() {
    const ref = useRef(null);
    const [activePublication, setActivePublication]= useState(true)
 
    return (
        <div className='home-container' style={{ background:"#DEDEDE"}}>
            <div className='social-icon-container'>
                <div className="social-icons">
                    <a href="https://www.facebook.com/hritvik.gupta/" target="_blank" rel="noreferrer">
                        {/* <FaFacebook size={50}/> */}
                        <Icon.Facebook className="icons" color="white" size={30}/>
                    </a>
                    <a href="https://github.com/hritvikgupta" target="_blank" rel="noreferrer">
                    <Icon.Github className="icons" color="white" size={30}/>
                    </a>
                    <a href='https://www.linkedin.com/in/hritvik-gupta-link/' target="_blank" rel="noreferrer">
                    <Icon.Linkedin className="icons" color="white" size={30}/>
                    </a>
                </div>
            </div>
            <nav className='nav-bar'>
                <div className='menuItems'>
                    <a href="#profile">
                        <FaHome/>
                        Home
                    </a>
                </div>
                <div className='menuItems'>
                    <a href="#footer">
                        <FaList></FaList>
                        Profile
                    </a>
                </div>
                <div className='menuItems'>
                    <a href="#publication" >
                        <FaNewspaper/>
                        Publications
                    </a>
                </div>
                <div className='menuItems'>
                    <a href="#blogs" >
                        <FaBlog/>
                        Blogs
                    </a>
                </div>
                <div className='menuItems'>
                    <a href="#contact">
                        <FaAddressBook/>
                        Contact
                    </a>
                </div>
            </nav>
            <div id="profile" className='profile-background'>
    <Profile contactRef = {ref}/>
</div>
            <div id="footer" className="home-footer">
                <Footer/>
            </div>
            <div id="publication" className='blogs-footer' >
  <Publication publication={activePublication} />
</div>
            <div id="blogs" className='blogs-footer'>
                <Blogs/>
            </div>

            <div id="contact" className="contact-footer" ref={ref}>
                <Contact/>
            </div>
        </div>
    );
}

export default Home;
