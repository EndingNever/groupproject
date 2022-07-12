import wallConnector from "./assets/images/wallConnector.avif";
import wallConnectorHov from "./assets/images/wallConnectorHover.avif";
import cableOrganizer from "./assets/images/cableOrganizer.avif";
import cableOrganizerHov from "./assets/images/cableOrganizerHover.avif";
import wallConPedestal from "./assets/images/wallConPedestal.avif";
import wallConPedestalHov from "./assets/images/wallConPedestalHover.avif";
import wallConFacePlate from "./assets/images/wallConFacePlate.avif";
import wallConFacePlateHov from "./assets/images/wallConFacePlateHover.avif";
import mobileConnector from "./assets/images/mobileConnector.avif";
import mobileConnectorHov from "./assets/images/mobileConnectorHov.avif";
import cordedMobileConnector from "./assets/images/cordedMobileConnector.avif";
import cordedMobileConnectorHov from "./assets/images/cordedMobileConnectorHov.avif";
import nemaAdaptorBundle from "./assets/images/nemaAdaptorBundle.avif";
import nemaAdaptorBundleHov from "./assets/images/nemaAdaptorBundleHov.avif";
import gen2NemaAdapters from "./assets/images/gen2NemaAdapters.avif";
import SAEJ1772ChargingAd from "./assets/images/SAEJ1772ChargingAd.avif";
import wallConGlassFp from "./assets/images/wallConGlassFp.avif";
import wallConGlassFpHov from "./assets/images/wallConGlassFpHov.avif";
import wallConWireboxK from "./assets/images/wallConWireboxK.avif";
import wallConFastenerK from "./assets/images/wallConFastenerK.avif";
import gen1NEMAAdapter from "./assets/images/gen1NEMAAdapter.avif";
import modelSLiner from "./assets/images/modelSLiner.avif";
import modelSLinerHov from "./assets/images/modelSLinerHover.avif";
import SRoofRack from "./assets/images/SRoofRack.avif";
import SRoofRackHov from "./assets/images/SRoofRackHov.avif";

//apparel image imports start here
import mensTee1 from "./assets/images/mensTee1.avif";
import mensTee1Alt from "./assets/images/mensTee1Alt.avif";
import mensTee2 from "./assets/images/mens-turbine-tee-2.avif";
import mensTee2Alt from "./assets/images/mens-turbine-tee-1.avif";
import mensTee3 from "./assets/images/mensTee3.avif";
import mensTee3Alt from "./assets/images/mensTee3Alt.avif";
import mensTee4 from "./assets/images/mensTee4.avif";
import mensTee4Alt from "./assets/images/mensTee4Alt.avif";
import mensSweater1 from "./assets/images/mensSweater1.avif";
import mensSweater1Alt from "./assets/images/mensSweater1Alt.avif";
import mensSweater2 from "./assets/images/mensSweater2.avif";
import mensSweater2Alt from "./assets/images/mensSweater2Alt.jpg";
import mensSweater3 from "./assets/images/mensSweater3.avif";
import mensSweater3Alt from "./assets/images/mensSweater3Alt.avif";
import mensSweater4 from "./assets/images/mensSweater4.avif";
import mensSweater4Alt from "./assets/images/mensSweater4Alt.jpg";
import mensOuterwear1 from "./assets/images/mensOuterwear1.avif";
import mensOuterwear1Alt from "./assets/images/mensOuterwear1Alt.avif";
import mensOuterwear2 from "./assets/images/mensOuterwear2.avif";
import mensOuterwear2Alt from "./assets/images/mensOuterwear2Alt.avif";
import mensOuterwear3 from "./assets/images/mensOuterwear3.avif";
import mensOuterwear3Alt from "./assets/images/mensOuterwear3Alt.avif";
import mensJogger1 from "./assets/images/mensJogger1.avif";
import mensJogger1Alt from "./assets/images/mensJogger1Alt.avif";

const items = [
  {
    category: "charging",
    subCategories: [
      {
        subCategory: "at-home",
        products: [
          {
            itemImg: wallConnector,
            itemImgHover: wallConnectorHov,
            itemName: "Wall Connector",
            itemPrice: 400,
            subCategory: "at-home",
            category: "charging",
            stockStatus: true,
            options: ["quick-add+", "select-size"],
          },
          {
            itemImg: wallConPedestal,
            itemImgHover: wallConPedestalHov,
            itemName: "Wall Connector Pedestal",
            itemPrice: 425,
            category: "charging",
            subCategory: "at-home",
            stockStatus: true,
            options: ["quick-add+"],
          },
          {
            itemImg: wallConFacePlate,
            itemImgHover: wallConFacePlateHov,
            itemName: "Wall Connector Color Matched Pedestal Faceplate",
            itemPrice: 75,
            category: "charging",
            subCategory: "at-home",
            stockStatus: true,
            options: ["view-details"],
          },
          {
            itemImg: cableOrganizer,
            itemImgHover: cableOrganizerHov,
            itemName: "Cable Organizer",
            itemPrice: 35,
            category: "Charging",
            subCategory: "at-home",
            stockStatus: true,
            options: ["quick-add+"],
          },
        ],
      },
      {
        subCategory: "on-the-road",
        products: [
          {
            itemImg: mobileConnector,
            itemImgHover: mobileConnectorHov,
            itemName: "Mobile Connector",
            itemPrice: 200,
            category: "charging",
            subCategory: "On-the-road",
            stockStatus: false,
            options: ["view-details"],
          },
          {
            itemImg: cordedMobileConnector,
            itemImgHover: cordedMobileConnectorHov,
            itemName: "Corded Mobile Connector",
            itemPrice: 200,
            category: "charging",
            subCategory: "On-the-road",
            stockStatus: false,
            options: [],
          },
          {
            itemImg: nemaAdaptorBundle,
            itemImgHover: nemaAdaptorBundleHov,
            itemName: "NEMA Adaptor Bundle",
            itemPrice: 245,
            category: "charging",
            subCategory: "on-the-road",
            stockStatus: true,
            options: ["quick-add+"],
          },
          {
            itemImg: gen2NemaAdapters,
            itemImgHover: gen2NemaAdapters,
            itemName: "Gen 2 NEMA Adapters",
            itemPrice: [35, 45],
            category: "charging",
            subCategory: "on-the-road",
            stockStatus: true,
            options: ["view-details"],
          },

          {
            itemImg: SAEJ1772ChargingAd,
            itemImgHover: SAEJ1772ChargingAd,
            itemName: "SAE J1772 Charging Adapter",
            itemPrice: 50,
            category: "charging",
            subCategory: "on-the-road",
            stockStatus: true,
            options: ["quick-add+"],
          },
        ],
      },

      {
        subCategory: "parts",
        products: [
          {
            itemImg: wallConGlassFp,
            itemImgHover: wallConGlassFpHov,
            itemName: "Wall Connector Glass Faceplate",
            itemPrice: 75,
            category: "charging",
            subCategory: "parts",
            stockStatus: true,
            options: ["quick-add+"],
          },
          {
            itemImg: wallConWireboxK,
            itemImgHover: wallConWireboxK,
            itemName: "Wall Connector Wirebox Kit",
            itemPrice: 65,
            category: "charging",
            subCategory: "parts",
            stockStatus: true,
            options: ["quick-add+"],
          },
          {
            itemImg: wallConFastenerK,
            itemImgHover: wallConFastenerK,
            itemName: "Wall Connector Fastener Kit",
            itemPrice: 20,
            category: "charging",
            subCategory: "parts",
            stockStatus: true,
            options: ["quick-add+"],
          },
          {
            itemImg: gen1NEMAAdapter,
            itemImgHover: gen1NEMAAdapter,
            itemName: "GEN 1 NEMA Adapter",
            itemPrice: 45,
            category: "charging",
            subCategory: "parts",
            stockStatus: true,
            options: ["quick-add+"],
          },
        ],
      },
    ],
  },
  {
    category: "vehicle-accessories",
    subCategories: [
      {
        subCategory: "model-s",
        products: [
          {
            itemImg: modelSLiner,
            itemImgHover: modelSLinerHov,
            itemName: "Model S All-Weather Interior Liners",
            itemPrice: 250,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller", "interior", "floor-mats"],
          },
          {
            itemImg: SRoofRack,
            itemImgHover: SRoofRackHov,
            itemName: "Model S Roof Rack - Glass Roof",
            itemPrice: 450,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller"],
          },
        ],
      },
    ],
  },
  {
    category: "apparel",
    subCategories: [
      {
        subCategory: "men",
        products: [
          {
            itemImg: mensTee1,
            itemImgHover: mensTee1Alt,
            itemName: "Men's Plaid Quarter Mile Tee",
            itemPrice: 35,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "tees", "best-seller"],
          },
          {
            itemImg: mensTee2,
            itemImgHover: mensTee2Alt,
            itemName: "Men's Turbine Short Sleeve Tee",
            itemPrice: 40,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "best-seller", "tees"],
          },
          {
            itemImg: mensTee3,
            itemImgHover: mensTee3Alt,
            itemName: "Men's Cybertruck Owl Tee",
            itemPrice: 35,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "tees"],
          },
          {
            itemImg: mensTee4,
            itemImgHover: mensTee4Alt,
            itemName: "Men's Let the Sun Shine Tee",
            itemPrice: 35,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "tees"],
          },
          {
            itemImg: mensSweater1,
            itemImgHover: mensSweater1Alt,
            itemName: "Men's Raven Lightweight Zip Up Bomber Jacket",
            itemPrice: 130,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Sweatshirts and Hoodies"],
          },
          {
            itemImg: mensSweater2,
            itemImgHover: mensSweater2Alt,
            itemName: "Men's Raven Lightweight Hoodie",
            itemPrice: 115,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Sweatshirts and Hoodies"],
          },
          {
            itemImg: mensSweater3,
            itemImgHover: mensSweater3Alt,
            itemName: "Chill Pullover Hoodie",
            itemPrice: 90,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Sweatshirts and Hoodies"],
          },
          {
            itemImg: mensSweater4,
            itemImgHover: mensSweater4Alt,
            itemName: "Men’s Chill Crew Neck Sweatshirt",
            itemPrice: 75,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Sweatshirts and Hoodies"],
          },
          {
            itemImg: mensOuterwear1,
            itemImgHover: mensOuterwear1Alt,
            itemName: "Men's Quilted Bomber Jacket",
            itemPrice: 195,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Outerwear"],
          },
          {
            itemImg: mensOuterwear2,
            itemImgHover: mensOuterwear2Alt,
            itemName: "Men's Quilted Shirt Jacket ",
            itemPrice: 160,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Outerwear"],
          },
          {
            itemImg: mensOuterwear3,
            itemImgHover: mensOuterwear3Alt,
            itemName: "Men's Corp Jacket",
            itemPrice: 90,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Outerwear"],
          },
          {
            itemImg: mensJogger1,
            itemImgHover: mensJogger1Alt,
            itemName: "Men's Chill Joggers",
            itemPrice: 85,
            subCategory: "men",
            category: "apparel",
            stockStatus: true,
            options: ["quick-add+", "select-size", "Joggers", "best-seller"],
          },
        ],
      },
      {
        subCategory: "women",
        products: [
          {
            itemImg: modelSLiner,
            itemImgHover: modelSLinerHov,
            itemName: "Model S All-Weather Interior Liners",
            itemPrice: 250,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller", "interior", "floor-mats"],
          },
          {
            itemImg: SRoofRack,
            itemImgHover: SRoofRackHov,
            itemName: "Model S Roof Rack - Glass Roof",
            itemPrice: 450,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller"],
          },
        ],
      },
      {
        subCategory: "kids",
        products: [
          {
            itemImg: modelSLiner,
            itemImgHover: modelSLinerHov,
            itemName: "Model S All-Weather Interior Liners",
            itemPrice: 250,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller", "interior", "floor-mats"],
          },
          {
            itemImg: SRoofRack,
            itemImgHover: SRoofRackHov,
            itemName: "Model S Roof Rack - Glass Roof",
            itemPrice: 450,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller"],
          },
        ],
      },
    ],
  },
];
export default items;
