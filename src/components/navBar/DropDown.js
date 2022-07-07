import React from "react";
import { DropDownMenu } from "./NavStyledComponents";
import { useNavigate } from "react-router-dom";

export default function DropDown({ dropDown, setDropDown }) {
  const navigate = useNavigate();
  return (
    <DropDownMenu
      slide={dropDown.category ? true : false}
      onMouseLeave={() => setDropDown({})}
    >
      {dropDown.subCategories &&
        dropDown.subCategories.map((sub, i) => (
          <ul key={i}>
            <h3
              onClick={() =>
                navigate(
                  `category/${dropDown.category
                    .toLocaleLowerCase()
                    .replace(/\s/g, "-")}/${sub
                    .toLocaleLowerCase()
                    .replace(/\s/g, "-")}`
                )
              }
            >
              {sub}
            </h3>
            <hr />
            {dropDown.options &&
              dropDown.options.map((option, i) => (
                <li
                  onClick={() =>
                    navigate(
                      `category/${dropDown.category
                        .toLocaleLowerCase()
                        .replace(/\s/g, "-")}/${sub
                        .toLocaleLowerCase()
                        .replace(/\s/g, "-")}/${option
                        .toLocaleLowerCase()
                        .replace(/\s/g, "-")}`
                    )
                  }
                >
                  {option}
                </li>
              ))}
          </ul>
        ))}
    </DropDownMenu>
  );
}
