import europeanTheme from "../images/EuropeanTheme.jpg";
import lasagnaMain from "../images/Lasagna.jpg";
import dessert from "../images/Desserts.jpg";
import appetizers from "../images/Appetizers.jpg";
import mediterraneanTheme from "../images/MediterraneanTheme.jpg";
import cocktails from "../images/Cocktails.jpg";

import searedScallops from "../images/SearedScallops.jpg";
import amarettiCharlotte from "../images/AmarettiCharlotte.jpg";
import brownieIceCream from "../images/BrownieIceCream.jpg";
import greenSalad from "../images/GreenSalad.jpg";
import baconCheeseBurger from "../images/BaconCheeseBurger.jpg";
import berryBlissPudding from "../images/BerryBlissPudding.jpg";
import savorySalmonToast from "../images/SavorySalmonToast.jpg";
import verdePestoParadiso from "../images/VerdePestoParadiso.jpg";
import rivieraRatatouille from "../images/RivieraRatatouille.jpg";
import quintessentialQuiche from "../images/QuintessentialQuiche.jpg";
import berryMist from "../images/BerryMist.jpg";

const menuArray = [
  {
    isProductCard: true,
    imageKey: "capreseCrostini",
    imageSrc: appetizers,
    theme: "appetizers",
  },
  {
    isProductCard: true,
    imageKey: "lasagna",
    imageSrc: lasagnaMain,
    theme: "classic",
  },
  {
    isProductCard: true,
    imageKey: "spaghettiAglioOlio",
    imageSrc: europeanTheme,
    theme: "european",
  },
  {
    isProductCard: true,
    imageKey: "bruschetta",
    imageSrc: mediterraneanTheme,
    theme: "mediterranean",
  },
  {
    isProductCard: true,
    imageKey: "wholemealWaffles",
    imageSrc: dessert,
    theme: "dessert",
  },
  {
    isProductCard: true,
    imageKey: "grapefruitOasis",
    imageSrc: cocktails,
    theme: "drinks",
  },
  {
    isProductCard: false,
    imageKey: "amarettiCharlotte",
    imageSrc: amarettiCharlotte,
    theme: "appetizers",
  },
  {
    isProductCard: false,
    imageKey: "searedScallops",
    imageSrc: searedScallops,
    theme: "appetizers",
  },
  {
    isProductCard: false,
    imageKey: "brownieIceCream",
    imageSrc: brownieIceCream,
    theme: "dessert",
  },
  {
    isProductCard: false,
    imageKey: "greenSalad",
    imageSrc: greenSalad,
    theme: "appetizers",
  },
  {
    isProductCard: false,
    imageKey: "baconCheeseBurger",
    imageSrc: baconCheeseBurger,
    theme: "classic",
  },
  {
    isProductCard: false,
    imageKey: "berryBlissPudding",
    imageSrc: berryBlissPudding,
    theme: "dessert",
  },
  {
    isProductCard: false,
    imageKey: "savorySalmonToast",
    imageSrc: savorySalmonToast,
    theme: "mediterranean",
  },
  {
    isProductCard: false,
    imageKey: "verdePestoParadiso",
    imageSrc: verdePestoParadiso,
    theme: "european",
  },
  {
    isProductCard: false,
    imageKey: "rivieraRatatouille",
    imageSrc: rivieraRatatouille,
    theme: "european",
  },
  {
    isProductCard: false,
    imageKey: "quintessentialQuiche",
    imageSrc: quintessentialQuiche,
    theme: "mediterranean",
  },
  {
    isProductCard: false,
    imageKey: "berryMist",
    imageSrc: berryMist,
    theme: "drinks",
  },
];

export default menuArray;
