import panzanella from "../images/dishes/Panzanella.webp";

import europeanCategory from "../images/dishes/EuropeanTheme.webp";
import mainDishCategory from "../images/dishes/Lasagna.webp";
import dessertCategory from "../images/dishes/Desserts.webp";
import appetizerCategory from "../images/dishes/Appetizers.webp";
import mediterraneanCategory from "../images/dishes/MediterraneanTheme.webp";
import cocktailsCategory from "../images/dishes/Cocktails.webp";

import searedScallops from "../images/dishes/SearedScallops.webp";
import amarettiCharlotte from "../images/dishes/AmarettiCharlotte.webp";
import brownieIceCream from "../images/dishes/BrownieIceCream.webp";
import greenSalad from "../images/dishes/GreenSalad.webp";
import baconCheeseBurger from "../images/dishes/BaconCheeseBurger.webp";
import berryBlissPudding from "../images/dishes/BerryBlissPudding.webp";
import savorySalmonToast from "../images/dishes/SavorySalmonToast.webp";
import verdePestoParadiso from "../images/dishes/VerdePestoParadiso.webp";
import rivieraRatatouille from "../images/dishes/RivieraRatatouille.webp";
import quintessentialQuiche from "../images/dishes/QuintessentialQuiche.webp";
import berryMist from "../images/dishes/BerryMist.webp";
import mimosaSunrise from "../images/dishes/MimosaSunrise.webp";
import pizzaRustica from "../images/dishes/PizzaRustica.webp";

import contactPage from "../images/contact/ContactPage.webp";

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
