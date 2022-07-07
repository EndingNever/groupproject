import React from 'react';
import './ShopPage.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from './HeroCarousel';
import VehicleAccessories from './VehicleAccessories';
import modelS from '../../assets/images/modelS.avif'
import model3 from '../../assets/images/model3.avif'
import modelX from '../../assets/images/modelX.avif'
import modelY from '../../assets/images/modelY.avif'
import charging from '../../assets/images/charging.avif'
import men from '../../assets/images/men.avif'
import women from '../../assets/images/women.avif'
import kids from '../../assets/images/kids.avif'
import lifestyle from '../../assets/images/lifestyle.avif'
import { ShopNowButton } from '../Styled';

const ShopPage = () => {
  return (
    <div className='shop-page-component'>
      <HeroCarousel />
      <div>
        Tesfaye
      </div>
      <VehicleAccessories image={modelS} title={'Model S Accessories'} />
      <VehicleAccessories image={model3} title={'Model 3 Accessories'} color={"black"} />
      <VehicleAccessories image={modelX} title={'Model X Accessories'} />
      <VehicleAccessories image={modelY} title={'Model Y Accessories'} color={"black"} />
      <VehicleAccessories image={charging} title={'Charging'} />
      <div className="apparel">
        <div className="men">
          <img src={men} alt="men's clothing" />
          <div className="apparel-text">
            <h1>Men's apparel</h1>
            <ShopNowButton>Shop Now</ShopNowButton>
          </div>
        </div>
        <div className="women">
          <img src={women} alt="women's clothing" />
          <div className="apparel-text">
            <h1>Women's apparel</h1>
            <ShopNowButton>Shop Now</ShopNowButton>
          </div>
        </div>
        <div className="kids">
          <img src={kids} alt="kid's clothing" />
          <div className="apparel-text">
            <h1>Kid's apparel</h1>
            <ShopNowButton>Shop Now</ShopNowButton>
          </div>
        </div>
      </div>
      <div className="lifestyle">
        <img src={lifestyle} alt="" />
      </div>
    </div>
  );
}

export default ShopPage;
