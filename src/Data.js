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

const items = {
  category: "charging",
  subCategories: [
    {
      subCategory: "at-home",
      products: [
        {
          itemImg: wallConnector,
          itemImgHover: wallConnectorHov,
          itemName: "Wall Connector",
          itemPrice: "$400",
          subCategory: "at home",
          category: "charging",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: wallConPedestal,
          itemImgHover: wallConPedestalHov,
          itemName: "Wall Connector Pedestal",
          itemPrice: "$425",
          category: "charging",
          subCategory: "at home",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: wallConFacePlate,
          itemImgHover: wallConFacePlateHov,
          itemName: "Wall Connector Color Matched Pedestal Faceplate",
          itemPrice: "$75",
          category: "charging",
          subCategory: "at home",
          stockStatus: true,
          options: ["view-details"],
        },
        {
          itemImg: cableOrganizer,
          itemImgHover: cableOrganizerHov,
          itemName: "Cable Organizer",
          itemPrice: "$35",
          category: "Charging",
          subCategory: "at home",
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
          itemPrice: "$200",
          category: "charging",
          subCategory: "On-the-road",
          stockStatus: false,
          options: ["view-details"],
        },
        {
          itemImg: cordedMobileConnector,
          itemImgHover: cordedMobileConnectorHov,
          itemName: "Corded Mobile Connector",
          itemPrice: "$200",
          category: "charging",
          subCategory: "On-the-road",
          stockStatus: false,
          options: ["view-details"],
        },
        {
          itemImg: nemaAdaptorBundle,
          itemImgHover: nemaAdaptorBundleHov,
          itemName: "NEMA Adaptor Bundle",
          itemPrice: "$245",
          category: "charging",
          subCategory: "on-the-road",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: gen2NemaAdapters,
          itemImgHover: gen2NemaAdapters,
          itemName: "Gen 2 NEMA Adapters",
          itemPrice: "$35 - $45",
          category: "charging",
          subCategory: "on-the-road",
          stockStatus: true,
          options: ["view-Details"],
        },

        {
          itemImg: SAEJ1772ChargingAd,
          itemImgHover: SAEJ1772ChargingAd,
          itemName: "SAE J1772 Charging Adapter",
          itemPrice: "$50",
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
          itemPrice: "$75",
          category: "charging",
          subCategory: "parts",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: wallConWireboxK,
          itemImgHover: wallConWireboxK,
          itemName: "Wall Connector Wirebox Kit",
          itemPrice: "$65",
          category: "charging",
          subCategory: "parts",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: wallConFastenerK,
          itemImgHover: wallConFastenerK,
          itemName: "Wall Connector Fastener Kit",
          itemPrice: "$20",
          category: "charging",
          subCategory: "parts",
          stockStatus: true,
          options: ["quick-add+"],
        },
        {
          itemImg: gen1NEMAAdapter,
          itemImgHover: gen1NEMAAdapter,
          itemName: "GEN 1 NEMA Adapter",
          itemPrice: "$45",
          category: "charging",
          subCategory: "parts",
          stockStatus: true,
          options: ["quick-add+"],
        },
      ],
    },
  ],
};
export default items;
