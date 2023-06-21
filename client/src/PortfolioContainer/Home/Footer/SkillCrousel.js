import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import pic from '../../../assets/Home/CrouselImages/Img1.png'
// import pic1 from '../../../assets/Home/CrouselImages/Img2.png'
// import pic2 from '../../../assets/Home/CrouselImages/Img3.png'
// import pic3 from '../../../assets/Home/CrouselImages/Img4.png'
// import pic4 from '../../../assets/Home/CrouselImages/Img5.png'
import './Crousel.css'

export const SkillCrousel = ({images}) => {
    // const images = [pic, pic1, pic2, pic3, pic4];
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const handleAfterChange = (currentSlide) => {
        const newIndex = currentSlide + Math.floor(responsive.desktop.items / 2);
        setActiveIndex((newIndex % images.length)+1);
    }

    return (
        <div className="carousel slide carousel-container" data-interval="1000" data-wrap="true" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-padding-40-px">
                    <div className="row">
                        <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true} 
                            autoPlaySpeed={1000} 
                            arrows={false} 
                            showDots={false}
                            // afterChange={handleAfterChange}
                        >
                            {images.map((image, index) => (
                                <div key={index} className={`col image-container ${index === activeIndex ? 'active' : ''}`} style = {{"opacity":"1"}}>
                                    <img src={image} alt={`slide ${index+1}`}
                                    style = {{
                                            "width": "50%",
                                            "height": "50%"
                                          
                                    }}/>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};
