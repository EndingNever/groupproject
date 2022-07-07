import React from "react";
import styled from "styled-components";
import TeslaLogo from '../../assets/Images/TeslaLogo'
import { useNavigate } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    gap: 16px;
    padding: 8px;
  }
  .navLogo {
    height: 10px;
    svg {
      height: 100%;
    }
  }
  li:hover {
    background-color: grey;
    color: white;
  }
`;

export default function Nav() {
  const navigate = useNavigate();
  return (
    <StyledNav>
      <ul className='navLeft'>
        <div className='navLogo'>
          <TeslaLogo />
        </div>
        <li onClick={() => navigate("/")}>Shop</li>
      </ul>
      <ul className='navCenter'>
        <li onClick={() => navigate("category/charging")}>Charging</li>
        <li onClick={() => navigate("category/vehicle-repair")}>
          Vehicle Repair
        </li>
        <li onClick={() => navigate("category/apparel")}>Apparel</li>
        <li onClick={() => navigate("category/lifestyle")}>Lifestyle</li>
      </ul>
      <ul className='navRight'>
        <li>Search</li>
        <li onClick={() => navigate("cart")}>Cart</li>
        <li>Menu</li>
      </ul>
    </StyledNav>
  );
}
