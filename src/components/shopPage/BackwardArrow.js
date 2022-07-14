import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Styles/Slides.scss";

const BackwardArrow = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#ADADAD",
        borderRadius: "20px",
        cursor: "pointer",
        float: "left",
        color: "white",
        display: "grid",
        placeItems: "center",
        position: "absolute",
        left: "32px",
        zIndex: "1"
      }}
    >
      <ArrowBackIosIcon style={{marginLeft: "8px"}}/>
    </div>
  );
};

export default BackwardArrow;
