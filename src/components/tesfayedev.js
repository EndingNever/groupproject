import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slides.scss";

import img1 from "../assets/images/img1.avif";
import img2 from "../assets/images/img2.avif";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.avif";
import img5 from "../assets/images/img5.avif";
import video from "../assets/images/Tesla_web.webm";
import img7 from "../assets/images/img7.avif";
import img8 from "../assets/images/img8.avif";
import img9 from "../assets/images/img9.avif";
import img10 from "../assets/images/img10.avif";

const Tesfayedev = () => {
  return (
    <>
      <div className="title">
        <h3>Best Sellers</h3>
      </div>
      <Carousel className="main-slide" showThumbs={false} infiniteLoop>
        <div>
          <img src={img1} alt="" height="366px" width="366px" />
          <h2 className="title">SAE J1772 Charging Adapter</h2>
        </div>
        <div>
          <img src={img2} alt="" height="366px" width="366px" />
          <h2 className="title">Model S/3/Y Pet Liner</h2>
        </div>
        <div>
          <img src={img3} alt="" height="366px" width="366px" />
          <h2 className="title">Model 3 All-Weather Interior Liners</h2>
        </div>
        <div>
          <img src={img4} alt="" height="366px" width="366px" />
          <h2 className="title">Model Y All-Weather Interior Liners</h2>
        </div>
        <div>
          <img src={img5} alt="" height="366px" width="366px" />
          <h2 className="title">Wall Connector </h2>
        </div>
        <div>
          <video height="366px" width="366px" autoplay muted loop>
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <h2 className="title">TESLA</h2>
        </div>
        <div>
          <img src={img7} alt="" height="366px" width="366px" />
          <h2 className="title">Gen 2 NEMA Adapters</h2>
        </div>
        <div>
          <img src={img8} alt="" height="366px" width="366px" />
          <h2 className="title">Cable Organizer</h2>
        </div>
        <div>
          <img src={img9} alt="" height="366px" width="366px" />
          <h2 className="title">Key Card</h2>
        </div>
        <div>
          <img src={img10} alt="" height="366px" width="366px" />
          <h2 className="title">Model Y All-Weather Rear Cargo Liner Set</h2>
        </div>
      </Carousel>
    </>
  );
};

export default Tesfayedev;
