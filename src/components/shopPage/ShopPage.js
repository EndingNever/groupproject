import React from 'react';
import './ShopPage.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCarousel from './HeroCarousel';

const ShopPage = () => {
  return (
    <div className='shop-page-component'>
      <HeroCarousel />
    </div>
  );
}

export default ShopPage;
