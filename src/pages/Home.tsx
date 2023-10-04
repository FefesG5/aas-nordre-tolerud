import { useTranslation } from "react-i18next";
import "../styles/home.css";

// DATA TO BE USE ONCE REFIXED
import productCardImages from "../data/productCardImagesData";
import menuArray from "../data/menuData";

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

  // TO BE REMOVED LATER AND USE ACTUAL DATA FROM data file
  const productCardImagesTest = [
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
  ];

  const productCardImagesList = productCardImagesTest
    .filter((image) => image.isProductCard)
    .map((image, index) => (
      <ProductCard
        isProductCard={image.isProductCard}
        key={index}
        imageSrc={image.imageSrc}
        altText={t(`dishCard.${image.imageKey}.altText`)}
        buttonName={t(`themes.${image.theme}`)}
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
