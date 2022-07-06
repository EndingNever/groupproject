import React from 'react';
import './ShopPage.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import wallConnector from '../../Assets/Images/wall_connector.avif'
import chillBanner from '../../Assets/Images/chill_banner.avif'
import floorMats from '../../Assets/Images/floormats.avif'
import { ShopNowButton } from '../Styled';

const ShopPage = () => {
  return (
    <div className='shop-page-component'>
      <div className="hero-carousel">
        <Carousel infiniteLoop emulateTouch interval="5000" showThumbs={false}>
          <div className='carousel-image-container'>
            <img src={wallConnector} alt="" />
            <div className="carousel-text">
              <h1>Wall Connector</h1>
              <h2>The most convenient way to charge at home</h2>
              <ShopNowButton>SHOP NOW</ShopNowButton>
            </div>
          </div>
          <div className='carousel-image-container'>
            <img src={chillBanner} alt="" />
          </div>
          <div className='carousel-image-container'>
            <img src={floorMats} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ShopPage;
