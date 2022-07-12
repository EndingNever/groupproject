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
import modelSRearLiner from "./assets/images/modelSRearLiner.avif";
import modelSRearLinerHov from "./assets/images/modelSRearLinerHov.avif";
import S3YLiner from "./assets/images/S3YLiner.avif";
import S3YLinerHov from "./assets/images/S3YLinerHov.avif";
import SDoorSills from "./assets/images/SDoorSills.avif"
import SDoorSillsHov from "./assets/images/SDoorSillsHov.avif"
import SXCoatHooks from "./assets/images/SXCoatHooks.avif"
import SXCoatHooksHov from "./assets/images/SXCoatHooksHov.avif"
import SunShades from "./assets/images/SunShades.avif"
import SMudFlaps from "./assets/images/SMudFlaps.avif"
import SMudFlapsHov from "./assets/images/SMudFlapsHov.avif"
import SCarCover from "./assets/images/SCarCover.avif"
import SCarCoverHov from "./assets/images/SCarCoverHov.avif"
import ModelSSpoiler from "./assets/images/ModelSSpoiler.avif"
import ModelSSpoilerHov from "./assets/images/ModelSSpoilerHov.avif"
import SBreakKit from "./assets/images/SBreakKit.avif"
import STempestWheel from "./assets/images/STempestWheel.avif"
import STempestWheelHov from "./assets/images/STempestWheelHov.avif"
import WheelLocks from "./assets/images/WheelLocks.avif"
import WheelLocksHov from "./assets/images/WheelLocksHov.avif"
import ArachnidWheel from "./assets/images/ArachnidWheel.avif"
import ArachnidWheelHov from "./assets/images/ArachnidWheelHov.avif"
import TireTote from "./assets/images/TireTote.avif"
import TireToteHov from "./assets/images/TireToteHov.avif"


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
            options: ["view-details", "best-seller", "Interior", "Floor Mats"],
          },
          {
            itemImg: SRoofRack,
            itemImgHover: SRoofRackHov,
            itemName: "Model S Roof Rack - Glass Roof",
            itemPrice: 450,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller", "Exterior"],
          },
          {
            itemImg: modelSRearLiner,
            itemImgHover: modelSRearLinerHov,
            itemName: "Model S All-Weather Rear Cargo Liner Set",
            itemPrice: 200,
            subCategory: "model-s",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "best-seller", "Floor Mats"],
          },
          {
            itemImg: S3YLiner,
            itemImgHover: S3YLinerHov,
            itemName: "Model S/3/y Pet Liner",
            itemPrice: 145,
            subCategory: "interior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Interior"],
          },
          {
            itemImg: SDoorSills,
            itemImgHover: SDoorSillsHov,
            itemName: "2012-2020 | Model S Illuminated Door Sills",
            itemPrice: 175,
            subCategory: "interior",
            category: "model-s",
            stockStatus: true,
            options: ["quick-add+", "Interior"],
          },
          {
            itemImg: SXCoatHooks,
            itemImgHover: SXCoatHooksHov,
            itemName: "2012-2020 | Model S/X Coat Hooks",
            itemPrice: 30,
            subCategory: "interior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Interior"],
          },
          {
            itemImg: SunShades,
            itemImgHover: SunShades,
            itemName: "2012-2020 | Model S Panoramic Roof Sunshades",
            itemPrice: 120,
            subCategory: "interior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Interior"],
          },
          {
            itemImg: SMudFlaps,
            itemImgHover: SMudFlapsHov,
            itemName: "Model S Mud FLaps",
            itemPrice: 40,
            subCategory: "exterior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Exterior"],
          },
          {
            itemImg: SCarCover,
            itemImgHover: SCarCoverHov,
            itemName: "Model S Car Cover",
            itemPrice: 325,
            subCategory: "exterior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Exterior"],
          },
          {
            itemImg: ModelSSpoiler,
            itemImgHover: ModelSSpoilerHov,
            itemName: "2012-2020 | Model S Carbon Fiber Spoiler",
            itemPrice: 1200,
            subCategory: "exterior",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Exterior"],
          },
          {
            itemImg: SBreakKit,
            itemImgHover: SBreakKit,
            itemName: "Model S Plaid Carbon Ceramic Brake Kit",
            itemPrice: 20000,
            subCategory: "Wheels and Tires",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Wheels and Tires"],
          },
          {
            itemImg: STempestWheel,
            itemImgHover: STempestWheelHov,
            itemName: `Model S 19" Tempest Wheel and Winter Tire Package`,
            itemPrice: 2750,
            subCategory: "Wheels and Tires",
            category: "model-s",
            stockStatus: false,
            options: ["view-details", "Wheels and Tires"],
          },
          {
            itemImg: ArachnidWheel,
            itemImgHover: ArachnidWheelHov,
            itemName: `Model S 21" Arachnid Wheel and Winter Tire Package`,
            itemPrice: 6000,
            subCategory: "Wheels and Tires",
            category: "model-s",
            stockStatus: false,
            options: ["view-details", "Wheels and Tires"],
          },
          {
            itemImg: TireTote,
            itemImgHover: TireToteHov,
            itemName: `Tire Tote`,
            itemPrice: 35,
            subCategory: "Wheels and Tires",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Wheels and Tires"],
          },
          {
            itemImg: WheelLocks,
            itemImgHover: WheelLocksHov,
            itemName: `Wheel Locks`,
            itemPrice: 50,
            subCategory: "Wheels and Tires",
            category: "model-s",
            stockStatus: true,
            options: ["view-details", "Wheels and Tires"],
          },
        ],
      },
    ],
  },
];
export default items;
