import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Blogs.css';

export const Blogs = ({ publication }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  console.log(publication)
  const name = publication ? 'PUBLICATIONS':'BLOGS';  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const address = publication ? 'publication.json' : '/blogs.json';
        const response = await fetch(process.env.PUBLIC_URL + address);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.log("Error while fetching blogs data:", error);
      }
    };

    fetchData();
  }, [publication]);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleAfterChange = (currentSlide) => {
    const newIndex = currentSlide + Math.floor(responsive.desktop.items / 2);
    setActiveIndex((newIndex % blogs.length) + 1);
  };

  return (
    <div className="blog-section">
      <h1 className="blog-title">{name}</h1>
      <div className="carousel slide carousel-container" data-interval="2000" data-wrap="true" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item-padding-40-px">
            <div className="row" style={{ padding: "2rem" }}>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={false}
                showDots={false}
                afterChange={handleAfterChange}
              >
                {blogs.map((blog, index) => (
                  <div style={{ marginRight: "1vw", height: "100%" }}>
                    <div
                      key={index}
                      className={`col card-container ${index === activeIndex ? 'active' : ''} carousel-container`}
                      style={{ padding: "3rem" }}
                    >
                      <img src={blog.image} alt={`blog ${index + 1}`} />
                      <h2 className="blog-name">{blog.name}</h2>
                      <a href={blog.articleLink}>Read More</a>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
