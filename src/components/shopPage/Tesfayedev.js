import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slides.scss";

import img1 from "../../assets/images/img1.avif";
import img2 from "../../assets/images/img2.avif";
import img3 from "../../assets/images/img3.avif";
import img4 from "../../assets/images/img4.avif";
import img5 from "../../assets/images/img5.avif";
import video from "../../assets/images/Tesla_web.webm";
import img7 from "../../assets/images/img7.avif";
import img8 from "../../assets/images/img8.avif";
import img9 from "../../assets/images/img9.avif";
import img10 from "../../assets/images/img10.avif";

//a functional component that returns a fragment (single root element) & all the functionalities are carried by carousel or wrapper, within that we've divisions or cards

const Tesfayedev = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="main-title">
        <h1>Best Sellers</h1>
      </div>
      <Carousel
        breakpoints={breakpoints}
        className="main-slide"
        showThumbs={false}
        infiniteLoop
      >
        <div className="wrap">
          <img
            className="d-block"
            src={img1}
            alt="First slide"
            height="300px"
            width="300px"
          />
          <h2>SAE J1772 Charging Adapter</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img2}
            alt="Second slide"
            height="300px"
            width="300px"
          />
          <h2>Model S/3/Y Pet Liner</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img3}
            alt="Third slide"
            height="300px"
            width="300px"
          />
          <h2>Model 3 All-Weather Interior Liners</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img4}
            alt="Forth slide"
            height="300px"
            width="300px"
          />
          <h2>Model Y All-Weather Interior Liners</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img5}
            alt="Fifth slide"
            height="300px"
            width="300px"
          />
          <h2>Wall Connector </h2>
        </div>
        <div className="wrap">
          <video
            className="d-block"
            height="300px"
            width="300px"
            autoplay
            muted
            loop
          >
            <source src={video} type="video/webm" />
          </video>
          <h2>TESLA</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img7}
            alt="Seventh slide"
            height="300px"
            width="300px"
          />
          <h2>Gen 2 NEMA Adapters</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img8}
            alt="Eighth slide"
            height="300px"
            width="300px"
          />
          <h2>Cable Organizer</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img9}
            alt="Ninth slide"
            height="300px"
            width="300px"
          />
          <h2>Key Card</h2>
        </div>
        <div className="wrap">
          <img
            className="d-block"
            src={img10}
            alt="Tenth slide"
            height="300px"
            width="300px"
          />
          <h2>Model Y All-Weather Rear Cargo Liner Set</h2>
        </div>
      </Carousel>
    </>
  );
};

export default Tesfayedev;
