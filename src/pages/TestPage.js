import React from "react";
import { useParams } from "react-router-dom";

const TestPage = () => {
  const { productCategory, subCategory, option, searchValue } = useParams();
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
      }}
    >
      <div>
        <h1>Test Route</h1>
        <h2>{searchValue && searchValue}</h2>
        <h2>{productCategory ? productCategory : "Cart"}</h2>
        <h2>{subCategory && subCategory}</h2>
        <h2>{option && option}</h2>
      </div>
    </div>
  );
};

export default TestPage;
