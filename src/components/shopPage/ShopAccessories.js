import React from 'react'
import './ShopAccessories.scss'
import men from '../../assets/images/men.avif'
import women from '../../assets/images/women.avif'
import kids from '../../assets/images/kids.avif'
import { ApparelButton } from '../Styled';

export default function ShopAccessories() {
  return (
    <>
      <div className="apparel">
        <div className="men">
          <img src={men} alt="men's clothing" />
          <div className="apparel-text">
            <h1>Men's apparel</h1>
            <ApparelButton>SHOP NOW</ApparelButton>
          </div>
        </div>
        <div className="women">
          <img src={women} alt="women's clothing" />
          <div className="apparel-text">
            <h1>Women's apparel</h1>
            <ApparelButton>SHOP NOW</ApparelButton>
          </div>
        </div>
        <div className="kids">
          <img src={kids} alt="kids' clothing" />
          <div className="apparel-text">
            <h1>Kids' apparel</h1>
            <ApparelButton>SHOP NOW</ApparelButton>
          </div>
        </div>
      </div>
    </>

  )
}
