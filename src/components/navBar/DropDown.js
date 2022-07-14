import React from "react";
import { DropDownMenu } from "./NavStyledComponents";
import { useNavigate } from "react-router-dom";

export default function DropDown({ dropDown, handleLeave }) {
  const navigate = useNavigate();
  return (
    <DropDownMenu
      slide={dropDown.category ? true : false}
      onMouseLeave={handleLeave}
      promo={dropDown.promo ? true : false}
    >
      <div className='nav-drop-section-left'>
        {dropDown.subCategories &&
          dropDown.subCategories.map((sub, i) => (
            <ul key={i}>
              <h3
                onClick={() =>
                  navigate(
                    `category/${dropDown.category
                      .toLocaleLowerCase()
                      .replace(/\s/g, "-")}/${sub.title
                      .toLocaleLowerCase()
                      .replace(/\s/g, "-")}`
                  )
                }
              >
                {sub.title}
              </h3>
              <hr />
              {dropDown.options &&
                dropDown.options.map((option, i) => (
                  <li
                    onClick={() =>
                      navigate(
                        `category/${dropDown.category
                          .toLocaleLowerCase()
                          .replace(/\s/g, "-")}/${sub.title
                          .toLocaleLowerCase()
                          .replace(/\s/g, "-")}/${option
                          .toLocaleLowerCase()
                          .replace(/\s/g, "-")}`
                      )
                    }
                    key={i}
                  >
                    {option}
                  </li>
                ))}
            </ul>
          ))}
      </div>
      {dropDown.promo && (
        <div className='nav-drop-section-promo'>
          <img src={dropDown.promo.image} alt='' />
          <h2>{dropDown.promo.title}</h2>
        </div>
      )}
    </DropDownMenu>
  );
}
