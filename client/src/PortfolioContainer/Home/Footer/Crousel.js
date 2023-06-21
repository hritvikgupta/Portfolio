import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { FaGithub } from 'react-icons/fa';
import "react-multi-carousel/lib/styles.css";
import './Crousel.css'

export const Crousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
      fetch(process.env.PUBLIC_URL + '/projects.json')
        .then(response => response.json())
        .then(json => setProjects(json))
        .catch(() => console.log("Error while fetching projects.json file."));
    }, []);
    
    const responsive = {
      superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    const handleAfterChange = (currentSlide) => {
      const newIndex = currentSlide + Math.floor(responsive.desktop.items / 2);
      setActiveIndex((newIndex % projects.length)+1);
    }

    return (
        <div className="carousel slide carousel-container" data-interval="2000" data-wrap="true" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-padding-40-px">
                    <div className="row">
                        <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlaySpeed={2000} 
                            arrows={false} 
                            showDots={false}
                            afterChange={handleAfterChange}
                        >
                            {projects.map((project, index) => (
                                <div key={index} className={`col card-container ${index === activeIndex ? 'active' : ''}`} 
                                style={{padding:"3rem", height:"80%", backgroundColor:""}}>
                                    <img src={project.image} alt={`project ${index+1}`} style={{alignItems:"center",height:"12rem",objectFit:"cover",width:"70%"}}/>
                                    <h2 style={{fontSize:"1.5em", fontWeight:"bold", textAlign:"center", marginTop:"0.5em"}}>{project.name}</h2>
                                    <p style={{fontSize:"1em", textAlign:"justify"}}>{project.techStack}</p>    
                                    <div style={{height: '30%', width:"100%", padding: '10px'}}>
                                        <p style={{fontSize:".8em",  textAlign:"justify",overflow: "hidden"}}>{project.description}</p>
                                    </div>
                                    <div style={{marginTop:"1em",width: '100%', display: 'flex', justifyContent: 'center'}}>
                                        <a href={project.githubLink}>
                                            <FaGithub size={24} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};
