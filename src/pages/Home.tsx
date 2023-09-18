import { useTranslation } from "react-i18next";
import "../styles/home.css";

import productCardImages from "../data/productCardImagesData";

import ProductCard from "../components/ProductCard";

function Home() {
  const { t } = useTranslation();

  const productCardImagesList = productCardImages
    .filter((image) => image.isProductCard)
    .map((image, index) => (
      <ProductCard
        isProductCard={image.isProductCard}
        key={index}
        imageSrc={image.imageSrc}
        altText={image.altText}
        buttonName={image.buttonName}
        dishName={image.dishName}
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
