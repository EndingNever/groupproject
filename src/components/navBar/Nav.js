import React, { createRef, useRef, useState, useEffect } from "react";
import TeslaLogo from "../../assets/images/TeslaLogo";
import { useNavigate } from "react-router-dom";
import DropDown from "./DropDown";
import { Indicator, StyledNav } from "./NavStyledComponents";
import { navList } from "./navData";
import SearchBar from "./SearchBar";
import CartBtn from "./CartBtn";

export default function Nav() {
  const navigate = useNavigate();
  //Refs for link locations and sizes
  const navRefs = useRef(navList.map(() => createRef()));
  //this is cool way to make a list of refs rather than making each one by one
  const menuRef = useRef();
  const shopRef = useRef();

  //holds the information we need to position the indicator
  const [indicator, setIndicator] = useState({});
  //holds the information needed for the drop down menu pulled from the navData
  const [dropDown, setDropDown] = useState({});
  //tracks the initial hover to indicate when transition should be active
  const [initialHover, setInitialHover] = useState(false);

  const handleEnter = (ref, item) => {
    //this will take the ref info break it into a more manageable object
    //then set the indicator to its new position as well as update dropDown
    //information if needed
    if (initialHover) {
      setIndicator({
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        posY: ref.offsetTop,
        posX: ref.offsetLeft,
        initial: true,
      });
      if (item) {
        setDropDown(item);
      } else {
        setDropDown({});
      }
    } else {
      setIndicator({
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        posY: ref.offsetTop,
        posX: ref.offsetLeft,
        initial: false,
      });
      setInitialHover(true);
      if (item) {
        setDropDown(item);
      } else {
        setDropDown({});
      }
    }
  };
  const handleLeave = () => {};

  const handleLeaveNav = () => {
    //this will make the indicator disappear when the mouse exits the nav otherwise it might persist
    if (!dropDown.category) {
      setIndicator({
        height: 0,
        width: 0,
        posY: 0,
        posX: 0,
        initial: false,
      });
      setInitialHover(false);
    }
  };

  const handleSearchHover = () => {
    setIndicator({
      height: 0,
      width: 0,
      posY: 0,
      posX: 0,
      initial: false,
    });
    setInitialHover(false);
    setDropDown({});
  };

  //create a list of the nav links needed from the navData list
  //assigns each link its subcategory and option data
  const mainNavLinks = navList.map((listItem, i) => (
    <li
      key={i}
      ref={navRefs.current[i]}
      onClick={() =>
        navigate(
          `category/${listItem.category
            .toLocaleLowerCase()
            .replace(/\s/g, "-")}`
        )
      }
      onMouseEnter={() => handleEnter(navRefs.current[i].current, listItem)}
    >
      {listItem.category}
    </li>
  ));

  return (
    <>
      <DropDown dropDown={dropDown} setDropDown={setDropDown} />
      <StyledNav
        persist={dropDown.category ? true : false}
        onMouseLeave={handleLeaveNav}
      >
        <Indicator setting={indicator} />
        <ul className='navLeft' onMouseLeave={handleLeave}>
          <div className='navLogo'>
            <TeslaLogo />
          </div>
          <hr />
          <li
            ref={shopRef}
            className='navHoverEffect'
            onClick={() => navigate("/")}
            onMouseEnter={() => handleEnter(shopRef.current)}
          >
            Shop
          </li>
        </ul>
        <ul className='navCenter' onMouseLeave={handleLeave}>
          {mainNavLinks}
        </ul>
        <ul className='navRight' onMouseLeave={handleLeave}>
          <li onMouseEnter={handleSearchHover}>
            <SearchBar />
          </li>
          <li onClick={() => navigate("cart")}>
            <CartBtn />
          </li>
          <li
            ref={menuRef}
            className='navHoverEffect'
            onMouseEnter={() => handleEnter(menuRef.current)}
          >
            Menu
          </li>
        </ul>
      </StyledNav>
    </>
  );
}
