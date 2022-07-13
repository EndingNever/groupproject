import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Styles/Slides.scss";

// import styled from "styled-components";
// import { Button } from "react-bootstrap";

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

const Tesfayedev = () => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div>
      <div className="title-wrap">
        <h3>Best Sellers</h3>
      </div>
      <div
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
        className="carousel-wrapper"
      >
        <Carousel
          className="main-carousel"
          controls={true}
          showThumbs={false}
          showArrows={showArrow}
          showStatus={false}
          interval={2000}
          infiniteLoop
          centerMode={true}
          centerSlidePercentage={30}
        >
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img1}
                alt="slide-1"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>SAE J1772 Charging Adapter</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img2}
                alt="slide-2"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Model S/3/Y Pet Liner</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img3}
                alt="slide-3"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Model 3 All-Weather Interior Liners</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img4}
                alt="slide-4"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Model Y All-Weather Interior Liners</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img5}
                alt="slide-5"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Wall Connector </h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <video
                className="img-wrapper"
                height="100%"
                width="`100%`"
                autoplay
                muted
                loop
              >
                <source src={video} type="video/webm" />
              </video>
            </div>
            <div>
              <h5>TESLA</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img7}
                alt="slide-7"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Gen 2 NEMA Adapters</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img8}
                alt="slide-8"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Cable Organizer</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img9}
                alt="slide-9"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Key Card</h5>
            </div>
          </div>
          <div className="wrap">
            <div>
              <img
                className="img-wrapper"
                src={img10}
                alt="slide-10"
                height="100%"
                width="100%"
              />
            </div>
            <div>
              <h5>Model Y All-Weather Rear Cargo Liner Set</h5>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

// export const Button = styled.div`
//   background: black;
// `;

export default Tesfayedev;

//a functional component that returns a fragment (single root element) & all the functionalities are carried by carousel/wrapper, within that we've divisions/cards

//styled-component

//export const Title = styled.h3`
//   width: 100%;
//   height: auto;
//   padding-top: 30px;
//   font-family: 'Gotham Medium';
//   background-color: white;

//   h3 {
//     font-size: 28px;
//     font-weight: 600;
//    font-family: 'Gotham Medium';
//     color: #181B21;
//     margin: 0px 0px 32px;
//     padding: 0px 24px;
//     margin-bottom: -10px;
//   }
// `;

// export const Wrap = styled.div`
//   width: 366px;
//   height: 366px;
//   padding: 0px 24px;

//   h5 {
//     font-size: 18px;
//     font-weight: 400;
//     color: #181B21;
//     margin: 0px 0px 32px;
//     padding: 0px 24px;
//   }
// `;

//fontawesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// <div>
//   <FontAwesomeIcon icon="fa-light fa-angle-left" />
// </div>
// <div>
//   <FontAwesomeIcon icon="fa-light fa-angle-right" />
// </div>