import React from 'react';
import './ShopPage.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from './HeroCarousel';
import VehicleAccessories from './VehicleAccessories';
import modelS from '../../assets/Images/modelS.avif'
import model3 from '../../assets/Images/model3.avif'
import modelX from '../../assets/Images/modelX.avif'
import modelY from '../../assets/Images/modelY.avif'
import charging from '../../assets/Images/charging.avif'

const ShopPage = () => {
  return (
    <div className='shop-page-component'>
      <HeroCarousel />
      <div>
        Tesfaye
      </div>
      <VehicleAccessories image={modelS} title={'Model S Accessories'} />
      <VehicleAccessories image={model3} title={'Model 3 Accessories'} color={"black"}/>
      <VehicleAccessories image={modelX} title={'Model X Accessories'} />
      <VehicleAccessories image={modelY} title={'Model Y Accessories'} color={"black"}/>
      <VehicleAccessories image={charging} title={'Charging'}/>
    </div>
  );
}

export default ShopPage;
