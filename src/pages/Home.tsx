import { useTranslation } from "react-i18next";
import "../styles/home.css";

import productCardImages from "../data/productCardImagesData";

import ProductCard from "../components/ProductCard";

// TO BE REMOVED LATER
import europeanTheme from "../images/EuropeanTheme.jpg";
import lasagnaMain from "../images/Lasagna.jpg";
import dessert from "../images/Desserts.jpg";
import appetizers from "../images/Appetizers.jpg";
import mediterraneanTheme from "../images/MediterraneanTheme.jpg";
import cocktails from "../images/Cocktails.jpg";

function Home() {
  const { t } = useTranslation();

  const productCardImagesTest = [
    {
      isProductCard: true,
      imageKey: "capreseCrostini",
      imageSrc: appetizers,
      buttonName: "Bite-sized Temptation",
      theme: "Appetizers",
    },
    {
      isProductCard: true,
      imageKey: "lasagna",
      imageSrc: lasagnaMain,
      buttonName: "Classic Mainstay",
      theme: "Classic Mainstay",
    },
    {
      isProductCard: true,
      imageKey: "spaghettiAglioOlio",
      imageSrc: europeanTheme,
      buttonName: "Continental Elegance",
      theme: "Continental Elegance",
    },
    {
      isProductCard: true,
      imageKey: "bruschetta",
      imageSrc: mediterraneanTheme,
      buttonName: "Mediterranean Banquet",
      theme: "Mediterranean Banquet",
    },
    {
      isProductCard: true,
      imageKey: "wholemealWaffles",
      imageSrc: dessert,
      buttonName: "Dessert Euphoria",
      theme: "Dessert Euphoria",
    },
    {
      isProductCard: true,
      imageKey: "grapefruitOasis",
      imageSrc: cocktails,
      buttonName: "Crafted Chemistry",
      theme: "Crafted Chemistry",
    },
  ];

  const productCardImagesList = productCardImagesTest
    .filter((image) => image.isProductCard)
    .map((image, index) => (
      <ProductCard
        isProductCard={image.isProductCard}
        key={index}
        imageSrc={image.imageSrc}
        altText={t(`dishCard.${image.imageKey}.altText`)}
        buttonName={image.buttonName}
        dishName={t(`dishCard.${image.imageKey}.name`)}
      />
    ));

  return (
    <>
      {" "}
      <div className="home-container">
        <div className="background-image">
          <h1 className="image-heading">{t("headline")}</h1>
          <p className="panzanella-text">{t("PanzanellaText")}</p>
        </div>
        <div className="overlay"></div>
        <div className="text-container">
          <h2 className="home-heading">{t("AasNordreTolerudGard")}</h2>
          <div className="home-text">
            <div className="home-text-section">{t("productCardTitle")}</div>
            {productCardImagesList}
            <div className="home-text-section">{t("homeTextProducts")}</div>
            <div className="home-text-section">{t("homeTextHistory")}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
