import React, { useEffect, useState } from "react";
import arrow from "../../assets/images/arrow.svg";
import checkMark from "../../assets/images/checkMark.svg";
import { StyledOption, StyledSelector } from "./CartStyledComponents";

const QuantitySelector = ({ handleSelect, itemQty }) => {
  const [dropDown, setDropDown] = useState(false);
  const [maxQty, setMaxQty] = useState(20);

  let options = [...Array(maxQty)].map((el, index) => (
    <StyledOption
      key={index}
      selected={index + 1 === itemQty}
      onClick={() => {
        handleSelect(index + 1);
        setDropDown(false);
      }}
    >
      {index + 1} <img src={checkMark} alt='' />
    </StyledOption>
  ));

  useEffect(() => {
    //somehow this is allowing me to perform a blur effect on the dropdown button
    //not sure how??? Might be glitchy no issues yet.
    if (dropDown) {
      window.addEventListener("onmouseup", () => {});
    } else {
      window.removeEventListener("onmouseup", () => {});
    }
  }, [dropDown]);

  return (
    <StyledSelector maxQty={maxQty} dropDown={dropDown}>
      <button
        onClick={() => setDropDown(!dropDown)}
        onBlur={() => setDropDown(false)}
      >
        <p>{itemQty}</p>
        <img src={arrow} alt='' />
      </button>
      <ol
        className={
          dropDown
            ? `selector-drop-down selector-drop-down-reveal`
            : `selector-drop-down`
        }
      >
        {options}
      </ol>
    </StyledSelector>
  );
};

export default QuantitySelector;
