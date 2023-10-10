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
    href: "https://unsplash.com/@foodistika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Elena Leya",
  },
  {
    isProductCard: true,
    imageKey: "lasagna",
    imageSrc: lasagnaMain,
    theme: "classic",
    href: "https://unsplash.com/@stefentan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Stefen Tan",
  },
  {
    isProductCard: true,
    imageKey: "spaghettiAglioOlio",
    imageSrc: europeanTheme,
    theme: "european",
    href: "https://unsplash.com/@youjeencho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Youjeen Cho",
  },
  {
    isProductCard: true,
    imageKey: "bruschetta",
    imageSrc: mediterraneanTheme,
    theme: "mediterranean",
    href: "https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Margarita Zueva",
  },
  {
    isProductCard: true,
    imageKey: "wholemealWaffles",
    imageSrc: dessert,
    theme: "dessert",
    href: "https://unsplash.com/photos/GJAHkC6UMf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Lindsay Moe",
  },
  {
    isProductCard: true,
    imageKey: "grapefruitOasis",
    imageSrc: cocktails,
    theme: "drinks",
    href: "https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Sara Cervera",
  },
  {
    isProductCard: false,
    imageKey: "amarettiCharlotte",
    imageSrc: amarettiCharlotte,
    theme: "appetizers",
    href: "https://unsplash.com/@weekendtripcreator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Lisha Riabinina",
  },
  {
    isProductCard: false,
    imageKey: "searedScallops",
    imageSrc: searedScallops,
    theme: "appetizers",
    href: "https://unsplash.com/@kamilkalb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Kamil Kalbarczyk",
  },
  {
    isProductCard: false,
    imageKey: "brownieIceCream",
    imageSrc: brownieIceCream,
    theme: "dessert",
    href: "https://unsplash.com/@kobbymendez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Kobby Mendez",
  },
  {
    isProductCard: false,
    imageKey: "greenSalad",
    imageSrc: greenSalad,
    theme: "appetizers",
    href: "https://unsplash.com/@madseneqvist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Mads Eneqvist",
  },
  {
    isProductCard: false,
    imageKey: "baconCheeseBurger",
    imageSrc: baconCheeseBurger,
    theme: "classic",
    href: "https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Chad Montano",
  },
  {
    isProductCard: false,
    imageKey: "berryBlissPudding",
    imageSrc: berryBlissPudding,
    theme: "dessert",
    href: "https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Micheile Henderson",
  },
  {
    isProductCard: false,
    imageKey: "savorySalmonToast",
    imageSrc: savorySalmonToast,
    theme: "mediterranean",
    href: "https://unsplash.com/@tatamee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Tammy Chan",
  },
  {
    isProductCard: false,
    imageKey: "verdePestoParadiso",
    imageSrc: verdePestoParadiso,
    theme: "european",
    href: "https://unsplash.com/@nerfee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Nerfee Mirandilla",
  },
  {
    isProductCard: false,
    imageKey: "rivieraRatatouille",
    imageSrc: rivieraRatatouille,
    theme: "european",
    href: "https://unsplash.com/@marijeane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Marjan Sadeghi",
  },
  {
    isProductCard: false,
    imageKey: "quintessentialQuiche",
    imageSrc: quintessentialQuiche,
    theme: "mediterranean",
    href: "https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Diliara Garifullina",
  },
  {
    isProductCard: false,
    imageKey: "berryMist",
    imageSrc: berryMist,
    theme: "drinks",
    href: "https://unsplash.com/@niki_mir?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Nikita Tikhomirov",
  },
];

export default menuArray;
