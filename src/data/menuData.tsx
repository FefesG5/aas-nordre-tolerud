import panzanella from "../images/Panzanella.jpg";

import europeanCategory from "../images/EuropeanTheme.jpg";
import mainDishCategory from "../images/Lasagna.jpg";
import dessertCategory from "../images/Desserts.jpg";
import appetizerCategory from "../images/Appetizers.webp";
import mediterraneanCategory from "../images/MediterraneanTheme.jpg";
import cocktailsCategory from "../images/Cocktails.webp";

import searedScallops from "../images/SearedScallops.jpg";
import amarettiCharlotte from "../images/AmarettiCharlotte.webp";
import brownieIceCream from "../images/BrownieIceCream.webp";
import greenSalad from "../images/GreenSalad.jpg";
import baconCheeseBurger from "../images/BaconCheeseBurger.webp";
import berryBlissPudding from "../images/BerryBlissPudding.webp";
import savorySalmonToast from "../images/SavorySalmonToast.jpg";
import verdePestoParadiso from "../images/VerdePestoParadiso.jpg";
import rivieraRatatouille from "../images/RivieraRatatouille.jpg";
import quintessentialQuiche from "../images/QuintessentialQuiche.jpg";
import berryMist from "../images/BerryMist.webp";
import mimosaSunrise from "../images/MimosaSunrise.jpg";
import pizzaRustica from "../images/PizzaRustica.jpg";

import contactPage from "../images/ContactPage.webp";

const menuArray = [
  {
    isBanner: true,
    isProductCard: false,
    imageKey: "panzanella",
    imageSrc: panzanella,
    theme: "appetizers",
    href: "https://unsplash.com/photos/vIm26fn_QKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Luisa Brimble",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "capreseCrostini",
    imageSrc: appetizerCategory,
    theme: "appetizers",
    href: "https://unsplash.com/@foodistika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Elena Leya",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "lasagna",
    imageSrc: mainDishCategory,
    theme: "classic",
    href: "https://unsplash.com/@stefentan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Stefen Tan",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "spaghettiAglioOlio",
    imageSrc: europeanCategory,
    theme: "european",
    href: "https://unsplash.com/@youjeencho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Youjeen Cho",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "bruschetta",
    imageSrc: mediterraneanCategory,
    theme: "mediterranean",
    href: "https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Margarita Zueva",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "wholemealWaffles",
    imageSrc: dessertCategory,
    theme: "dessert",
    href: "https://unsplash.com/photos/GJAHkC6UMf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Lindsay Moe",
  },
  {
    isBanner: false,
    isProductCard: true,
    imageKey: "grapefruitOasis",
    imageSrc: cocktailsCategory,
    theme: "drinks",
    href: "https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Sara Cervera",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "amarettiCharlotte",
    imageSrc: amarettiCharlotte,
    theme: "appetizers",
    href: "https://unsplash.com/@weekendtripcreator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Lisha Riabinina",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "searedScallops",
    imageSrc: searedScallops,
    theme: "appetizers",
    href: "https://unsplash.com/@kamilkalb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Kamil Kalbarczyk",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "brownieIceCream",
    imageSrc: brownieIceCream,
    theme: "dessert",
    href: "https://unsplash.com/@kobbymendez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Kobby Mendez",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "greenSalad",
    imageSrc: greenSalad,
    theme: "appetizers",
    href: "https://unsplash.com/@madseneqvist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Mads Eneqvist",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "baconCheeseBurger",
    imageSrc: baconCheeseBurger,
    theme: "classic",
    href: "https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Chad Montano",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "berryBlissPudding",
    imageSrc: berryBlissPudding,
    theme: "dessert",
    href: "https://unsplash.com/@micheile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Micheile Henderson",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "savorySalmonToast",
    imageSrc: savorySalmonToast,
    theme: "mediterranean",
    href: "https://unsplash.com/@tatamee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Tammy Chan",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "verdePestoParadiso",
    imageSrc: verdePestoParadiso,
    theme: "european",
    href: "https://unsplash.com/@nerfee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Nerfee Mirandilla",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "rivieraRatatouille",
    imageSrc: rivieraRatatouille,
    theme: "european",
    href: "https://unsplash.com/@marijeane?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Marjan Sadeghi",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "quintessentialQuiche",
    imageSrc: quintessentialQuiche,
    theme: "mediterranean",
    href: "https://unsplash.com/@dilja96?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Diliara Garifullina",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "berryMist",
    imageSrc: berryMist,
    theme: "drinks",
    href: "https://unsplash.com/@niki_mir?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    photographer: "Nikita Tikhomirov",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "mimosaSunrise",
    imageSrc: mimosaSunrise,
    theme: "drinks",
    href: "https://unsplash.com/@picoftasty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    photographer: "Mae Mu",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "pizzaRustica",
    imageSrc: pizzaRustica,
    theme: "classic",
    href: "https://unsplash.com/@sahand_hoseini?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    photographer: "Sahand Hoseini",
  },
  {
    isBanner: false,
    isProductCard: false,
    imageKey: "sakrysoyaVillage",
    imageSrc: contactPage,
    theme: "attributions",
    href: "https://unsplash.com/@masisandy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    photographer: "André Mašek",
  },
];

export default menuArray;
