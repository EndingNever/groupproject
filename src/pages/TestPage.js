import React from "react";
import { useParams } from "react-router-dom";

const TestPage = () => {
  const { productCategory } = useParams();
  return (
    <div>
      <h1>Test Route</h1>
      <h2>{productCategory ? productCategory : "Cart"}</h2>
    </div>
  );
};

export default TestPage;
