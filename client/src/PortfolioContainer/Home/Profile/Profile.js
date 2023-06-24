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
                        <span className="highlighted-text name">Hritvik Gupta</span>,
                        <span className="highlighted-text description">
                            A dedicated Software Developer skilled in Web Frontend and Android app development. I hold a 
                            <span className="highlighted-text" style={{color:"#ff6347 !important"}}> Master's degree in Computer Engineering from the University of California, Riverside</span>. 
                            My expertise includes MERN Stack, JavaScript, Java, Kotlin and other Android and Web development tech stack. 
                            Apart from coding, I've conducted sucessfull 
                            <span className="highlighted-text"> researches in Natural Language Processing and have published papers in the field</span>.
                        </span>
                    </span>

                    <div className="profile-options">
                        <Button className="primary-btn" onClick={scrollToContact}>Hire me</Button>
                        <Button className="highlighted-text-btn" href="HritvikResume2.pdf" download="Hritvik HritvikResume2.pdf">Get Resume</Button>
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
