import React from "react";
import "./HeroCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import wallConnector from "../../assets/images/wall_connector.avif";
import chillBanner from "../../assets/images/chill_banner.avif";
import floorMats from "../../assets/images/floormats.avif";
import { ShopNowButton } from "../Styled";

export default function HeroCarousel() {
  return (
    <div className="hero-carousel">
      <Carousel
      
        autoPlay
        infiniteLoop
        emulateTouch
        interval="5000"
        showThumbs={false}
      >
        <div className="carousel-image-container">
          <img src={wallConnector} alt="" />
          <div className="carousel-text">
            <h1>Wall Connector</h1>
            <h2>The most convenient way to charge at home</h2>
            <ShopNowButton>SHOP NOW</ShopNowButton>
          </div>
        </div>
        <div className="carousel-image-container">
          <img src={chillBanner} alt="" />
          <div className="carousel-text">
            <h1>Chill Collection</h1>
            <h2>Premium comfort for any season</h2>
            <ShopNowButton>SHOP NOW</ShopNowButton>
          </div>
        </div>
        <div className="carousel-image-container">
          <img src={floorMats} alt="" />
          <div className="carousel-text">
            <h1>Model Y All-Weather Interior Liners</h1>
            <h2>For maximum protection and durability</h2>
            <ShopNowButton>SHOP NOW</ShopNowButton>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
