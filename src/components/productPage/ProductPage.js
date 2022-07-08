import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import CardsGrid from "../CardsGrid";
import items from "../../Data";

const ProductPage = () => {
  const params = useParams();

  return (
    <div style={{ paddingTop: "82px" }}>
      {/* search items for category that matches parameters using filter */}
      {items
        .filter(
          (category, index) => category.category === params.productCategory
        ) // map through the filtered array to get the categories data
        .map((category) => (
          <div className="chargingWrapper">
            <h2>{category.category}</h2>
            {/* map through the subCategories and send each list of products to the Cards Grid */}
            {category.subCategories.map((sub, index) => (
              <div className="atHome">
                <h3>{sub.subCategory}</h3>
                <CardsGrid products={sub.products} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
