import wallConnector from "../../assets/images/feature_wall_connector.avif";
import navChill from "../../assets/images/feature_nav_chill2.avif";
import giftCard from "../../assets/images/Tesla_gift_card_0.avif";

export const navList = [
  {
    category: "Charging",
    subCategories: ["At Home", "One The Road", "Parts"],
    promo: { title: "Wall Connector", image: wallConnector },
  },
  {
    category: "Vehicle Accessories",
    subCategories: ["Model S", "Model 3", "Model X", "Model Y"],
    options: [
      "Best Sellers",
      "Interior",
      "Exterior",
      "Wheels and Tires",
      "Floor Mats",
      "Parts",
      "Keys",
    ],
  },
  {
    category: "Apparel",
    subCategories: ["Men", "Women", "Kids"],
    options: [
      "Best Sellers",
      "Tees",
      "Sweatshirts and Hoodies",
      "Outerwear",
      "Joggers",
      "Hats",
      "Socks",
    ],
    promo: { title: "Chill Pullover Hoodie", image: navChill },
  },
  {
    category: "Lifestyle",
    subCategories: [
      "Best Sellers",
      "Mini Teslas",
      "Drinkware",
      "Outdoors & Tech",
      "Gist Card",
    ],
    promo: { title: "Tesla Shop Gift Card", image: giftCard },
  },
];
