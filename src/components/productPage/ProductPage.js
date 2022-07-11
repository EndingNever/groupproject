import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import CardsGrid from "../CardsGrid";
import items from "../../Data";

//useEffect that goes through the options and creates separate arrays for each option (best seller, interior, exterior, etc.)
// UseEffect will create a list of products
// Something in the product page return to know if we have those options.
// Switch statement into useEffect
// For each option, run switch statement => for each it matches it will create an array of products
// That array of products will get pushed to
//  For each option

const ProductPage = () => {
  const params = useParams();

  return (
    <div style={{ paddingTop: "100px" }} className="productsPage">
      {/* search items for category that matches parameters using filter */}
      {items
        .filter(
          (category, index) => category.category === params.productCategory
        ) // map through the filtered array to get the categories data
        .map((category, i) => (
          <div key={i} className="chargingWrapper">
            <h2>{category.category}</h2>
            {/* map through the subCategories and send each list of products to the Cards Grid */}
            {category.subCategories.map((sub, index) => (
              <div className="atHome">
                <h3>{sub.subCategory.replace(/-/g, " ")}</h3>
                <CardsGrid products={sub.products} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
