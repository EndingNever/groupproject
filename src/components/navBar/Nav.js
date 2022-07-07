import React, { createRef, useRef, useState } from "react";
import styled from "styled-components";
import TeslaLogo from '../../assets/Images/TeslaLogo'
import { useNavigate } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  position: fixed;
  width: 100%;
  top: 0px;
  color: white;
  transition: all 0.1s;
  ul {
    display: flex;
    list-style: none;
    gap: 16px;
    padding: 16px;
  }
  .navLogo {
    height: 10px;
    svg {
      height: 100%;
    }
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Indicator = styled.div`
  position: absolute;
  background-color: red;
  height: ${({ setting }) => `${setting.height}px`};
  width: ${({ setting }) => `${setting.width}px`};
  transform: translateX(${({ setting }) => `${setting.posX}px`});
  z-index: -1;
  transition: all 1s cubic-bezier(0.75, 0, 0, 1);
  border-radius: 10px;
  background-color: lightgray;
`;

const navList = [
  {
    category: "Charging",
    subCategories: ["At Home", "One The Road", "Parts"],
    promo: "insertImageHere",
  },
  {
    category: "Vehicle Accessories",
    subCategories: ["Model S", "Model 3", "Model X", "Model Y"],
    options: [
      "Best Sellers",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Floor Mats",
      "Parts",
      "Keys",
    ],
  },
  {
    category: "Apparel",
    subCategories: ["Men", "Women", "Kids"],
    options: [
      "Best Sellers",
      "Tees",
      "Sweatshirts and Hoodies",
      "Outerwear",
      "Joggers",
      "Hats",
      "Socks",
    ],
    promo: "insertImageHere",
  },
  {
    category: "Lifestyle",
    subCategories: [
      "Best Sellers",
      "Mini Teslas",
      "Drinkware",
      "Outdoors & Tech",
      "Gist Card",
    ],
    promo: "insertImageHere",
  },
];

export default function Nav() {
  const navigate = useNavigate();
  const navRefs = useRef(navList.map(() => createRef()));
  const [indicator, setIndicator] = useState({});

  const handleEnter = (item, ref) => {
    setIndicator({
      height: ref.offsetHeight + 8,
      width: ref.offsetWidth + 8,
      posY: ref.offsetTop - 4,
      posX: ref.offsetLeft - 4,
    });
  };
  const handleLeave = () => {
    setIndicator({
      height: 0,
      width: 0,
      posY: 0,
      posX: 0,
    });
  };

  const mainNavLinks = navList.map((listItem, i) => (
    <li
      ref={navRefs.current[i]}
      onClick={() =>
        navigate(
          `category/${listItem.category.toLocaleLowerCase().replace(/\s/g, "")}`
        )
      }
      onMouseEnter={() => handleEnter(listItem, navRefs.current[i].current)}
      onMouseLeave={handleLeave}
    >
      {listItem.category}
    </li>
  ));

  return (
    <StyledNav>
      <Indicator setting={indicator} />
      <ul className='navLeft'>
        <div className='navLogo'>
          <TeslaLogo />
        </div>
        <li onClick={() => navigate("/")}>Shop</li>
      </ul>
      <ul className='navCenter'>{mainNavLinks}</ul>
      <ul className='navRight'>
        <li>Search</li>
        <li onClick={() => navigate("cart")}>Cart</li>
        <li>Menu</li>
      </ul>
    </StyledNav>
  );
}
