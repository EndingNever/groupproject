import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Styles/Slides.scss";

const ForwardArrow = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#ADADAD",
        borderRadius: "20px",
        cursor: "pointer",
        float: "right",
        color: "white",
        display: "grid",
        placeItems: "center",
        position: "absolute",
        right: "32px"
      }}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

export default ForwardArrow;
