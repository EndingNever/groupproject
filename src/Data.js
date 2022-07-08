import wallConnector from "./assets/images/wallConnector.avif";
import wallConnectorHov from "./assets/images/wallConnectorHover.avif";
import cableOrganizer from "./assets/images/cableOrganizer.avif";
import cableOrganizerHov from "./assets/images/cableOrganizerHover.avif";
import wallConPedestal from "./assets/images/wallConPedestal.avif";
import wallConPedestalHov from "./assets/images/wallConPedestalHover.avif";
import wallConFacePlate from "./assets/images/wallConFacePlate.avif";
import wallConFacePlateHov from "./assets/images/wallConFacePlateHover.avif";

const items = [
  {
    itemImg: wallConnector,
    itemImgHover: wallConnectorHov,
    itemName: "Wall Connector",
    itemPrice: "$400",
    category: "charging",
    subCategory: "at home",
  },
  {
    itemImg: wallConPedestal,
    itemImgHover: wallConPedestalHov,
    itemName: "Wall Connector Pedestal",
    itemPrice: "$425",
    category: "charging",
    subCategory: "at home",
    stockStatus: true,
  },
  {
    itemImg: wallConFacePlate,
    itemImgHover: wallConFacePlateHov,
    itemName: "Wall Connector Color Match Pedestal Faceplate",
    itemPrice: "$75",
    category: "charging",
    subCategory: "at home",
    stockStatus: true,
  },
  {
    itemImg: cableOrganizer,
    itemImgHover: cableOrganizerHov,
    itemName: "Cable Organizer",
    itemPrice: "$35",
  },
];
export default items;
