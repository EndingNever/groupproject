import React from 'react';
import './ShopPage.scss'
import wallConnector from '../wall_connector.avif'

const FabiansComponent = () => {
  return (
    <div className='shop-page-component'>
      <div className="hero-carousel">
        <img src={wallConnector} alt="" />
      </div>
      {/* <h1>Test</h1> */}
    </div>
  );
}

export default FabiansComponent;
