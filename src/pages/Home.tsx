import { useTranslation } from "react-i18next";

import ProductCard from "../components/ProductCard";
import ScrollBtn from "../components/ScrollBtn";
import menuData from "../data/menuData";

import "../styles/home.css";

export default function Home() {
  const { t } = useTranslation();

  const productCardImagesList = menuData
    .filter((image) => image.isProductCard)
    .map((image) => (
      <ProductCard
        isProductCard={image.isProductCard}
        key={image.imageKey}
        imageSrc={image.imageSrc}
        width={250}
        height={250}
        altText={t(`dishCard.${image.imageKey}.altText`)}
        linkTo={image.theme}
        buttonName={t(`themes.${image.theme}`)}
        dishName={t(`dishCard.${image.imageKey}.name`)}
      />
    ));

  return (
    <div className="home-container">
      <div className="background-image">
        <h1 className="image-heading">{t("headline")}</h1>
        <p className="panzanella-text">{t("panzanellaText")}</p>
      </div>
      <div className="overlay"></div>
      <div className="text-container">
        <h2 className="home-heading">{t("aasNordreTolerudGard")}</h2>
        <div className="home-text">
          <div className="home-text-section">{t("productCardTitle")}</div>

          {productCardImagesList}
          <div className="home-text-section">{t("homeTextProducts")}</div>
          <div className="home-text-section">{t("homeTextHistory")}</div>
        </div>
      </div>
      <ScrollBtn />
    </div>
  );
}
