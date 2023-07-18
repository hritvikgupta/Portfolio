import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Profile.css';
import profilePic from '../../../assets/Home/pic2.png';

const Profile = ({ contactRef }) => {
    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behaviour: 'smooth' });
    };

    return (
        <Container className="profile-container d-flex justify-content-center align-items-center" style={{ borderRadius: "5rem" }}>
            <Row className="w-100">
                <Col md={6} className="profile-details-container">
                                    <span className="primary-text">
                        <span className="highlighted-text welcome"> Hi! I'm </span>
                        <span className="highlighted-text name">Hritvik Gupta</span>
                        <span className="highlighted-text description">
                           {/* As a Software Developer specialized in Web Frontend and Android application development, I bring a wealth of skill and knowledge to the table. I'm a proud holder of a Master's degree in Computer Engineering from the prestigious University of California, Riverside. My toolkit consists of an array of programming languages and technologies including JavaScript, Java, Kotlin, React JS, Typescript, and Bootstrap. Alongside my development expertise, I've made notable strides in the field of Natural Language Processing, culminating in successful research projects and published papers.                     */}
                           
As a Software Developer with a focus on Web Frontend and Android application development, I've honed a diverse set of skills and amassed a broad base of knowledge in the tech sphere. I earned my Master's degree in Computer Engineering from the prestigious University of California, Riverside, a feat I'm immensely proud of. I am well-versed in a variety of programming languages and technologies, including but not limited to JavaScript, Java, Kotlin, and TypeScript. I particularly excel in working with the MERN Stack and Bootstrap for web development. Beyond my development capabilities, I have a keen interest in Natural Language Processing, which has propelled me towards groundbreaking research projects and publications in this field. Complementing my technical abilities, I have substantial experience as a mentor and organizer for coding bootcamps and hackathons, and I cherish the opportunity to tutor undergraduates in Python, JavaScript, and Object-Oriented programming fundamentals.
                           </span> 
                    </span>

                    <div className="profile-options">
                        <Button className="primary-btn" onClick={scrollToContact}>Hire me</Button>
                        <Button className="highlighted-text-btn" href="Hritvik_Resume (2).pdf" download="Hritvik Resume">Get Resume</Button>
                    </div>
                </Col>
                <Col md={6} className="profile-picture">
                    <img className="profile-picture-background" src={profilePic} />
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
