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
                        <span className="highlighted-text welcome"> HI THERE! I AM </span>
                        <span className="highlighted-text name">HRITVIK GUPTA</span>
                        <span className="highlighted-text description">
                            A proficient Software developer with expertise in Web Frontend and Android application development with a passion for crafting seamless, interactive, and user-friendly experiences across multiple platforms.
                            Equipped with a comprehensive skill set that includes proficiency in JavaScript, React, and Android development tools, I consistently deliver code that is clean, efficient, and adheres to industry best practices.
                            Includeing my developing skills i have researched in Natural Language Processing and published papers in the same. 
                        </span>
                    </span>

                    <div className="profile-options">
                        <Button className="primary-btn" onClick={scrollToContact}>Hire me</Button>
                        <Button className="highlighted-text-btn" href="HritvikResume.pdf" download="Hritvik HritvikResume.pdf">Get Resume</Button>
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
