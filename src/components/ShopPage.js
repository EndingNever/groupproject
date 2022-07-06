import React from 'react';
import './ShopPage.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import wallConnector from '../Assets/Images/wall_connector.avif'
import chillBanner from '../Assets/Images/chill_banner.avif'
import floorMats from '../Assets/Images/floormats.avif'

const FabiansComponent = () => {
  return (
    <div className='shop-page-component'>
      <div className="hero-carousel">
        <Carousel infiniteLoop autoPlay emulateTouch interval="5000" showThumbs={false}>
          <div>
            <img src={wallConnector} alt="" />
          </div>
          <div>
            <img src={chillBanner} alt="" />
          </div>
          <div>
            <img src={floorMats} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default FabiansComponent;
