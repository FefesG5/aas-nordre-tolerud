import { useTranslation } from "react-i18next";
import "../styles/home.css";

import europeanTheme from "../images/EuropeanTheme.jpg";
import lasagnaMain from "../images/Lasagna.jpg";
import dessert from "../images/Desserts.jpg";
import appetizers from "../images/Appetizers.jpg";
import mediterraneanTheme from "../images/MediterraneanTheme.jpg";
import cocktails from "../images/Cocktails.jpg";

import ProductCard from "../components/ProductCard";

function Home() {
  const { t } = useTranslation();

  const productCardImages = [
    {
      imageSrc: appetizers,
      altText: "Appetizers on a wooden chopping board",
      buttonName: "Bite-sized Temptation",
      dishName: "Caprese Crostini",
    },
    {
      imageSrc: lasagnaMain,
      altText: "Lasagna",
      buttonName: "Classic Mainstay",
      dishName: "Lasagna",
    },
    {
      imageSrc: europeanTheme,
      altText: "Simple spaghetti Aglio Olio",
      buttonName: "Continental Elegance",
      dishName: "Spaghetti Aglio Olio",
    },
    {
      imageSrc: mediterraneanTheme,
      altText: "Bruschetta",
      buttonName: "Mediterranean Banquet",
      dishName: "Bruschetta",
    },
    {
      imageSrc: dessert,
      altText: "Waffles with blueberries",
      buttonName: "Dessert Euphoria",
      dishName: "Wholemeal Waffles",
    },
    {
      imageSrc: cocktails,
      altText: "Grapefruit cocktail drink",
      buttonName: "Crafted Chemistry",
      dishName: "Grapefruit Oasis",
    },
  ];

  const productCardImagesList = productCardImages.map((image, index) => (
    <ProductCard
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
