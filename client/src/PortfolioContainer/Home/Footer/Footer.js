import pic from '../../../assets/Home/CrouselImages/Img1.png'
import pic1 from '../../../assets/Home/CrouselImages/Img2.png'
import pic2 from '../../../assets/Home/CrouselImages/Img3.png'
import pic3 from '../../../assets/Home/CrouselImages/Img4.png'
import pic4 from '../../../assets/Home/CrouselImages/Img5.png'
import skill from '../../../assets/Home/skills/java.webp'
import skill1 from '../../../assets/Home/skills/github.webp'
import skill2 from '../../../assets/Home/skills/python.webp'
import skill3 from '../../../assets/Home/skills/react.webp'
import skill4 from '../../../assets/Home/skills/swift.webp'
import skill5 from '../../../assets/Home/skills/tensorflow.webp'
import skill6 from '../../../assets/Home/skills/xcode.webp'

import React from 'react';
import shapeImage from '../../../assets/Home/shape-bg.png';
import { Crousel } from './Crousel';
import Icons from './Icons';
import { SkillCrousel } from './SkillCrousel';
import './Footer.css'; // make sure to import your css file here

const images = [pic, pic1, pic2, pic3, pic4];
const skills = [skill, skill1, skill2, skill3, skill4, skill5, skill6]

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <div className="footer-section">
                    <h1 className="subheadings">
                        <span >PROJECTS OVERVIEW</span>
                    </h1>
                    <div className="footer-crousel">              
                        <Crousel images={images}/>
                    </div>
                </div>
                <div className="footer-crousel icons">              
                    <div className="footer-section icons">
                        <h1 className="subheadings">
                            <span>SKILLS</span>
                        </h1>
                        <div className="crousel-container">
                            <SkillCrousel images={skills}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
