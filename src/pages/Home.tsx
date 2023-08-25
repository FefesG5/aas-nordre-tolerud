import { useTranslation } from "react-i18next";
import "../styles/home.css";
import mainDish from "../images/MainDish.jpg";
import dessert from "../images/Desserts.jpg";
import ProductCard from "../components/ProductCard";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div className="home-container">
        <div className="background-image">
          <h1 className="image-heading">{t("headline")}</h1>
          <p className="panzanella-text">Panzanella: Tradional Italian Salad</p>
        </div>
        <div className="overlay"></div>
        <div className="text-container">
          <h2 className="home-heading">{t("AasNordreTolerudGard")}</h2>
          <div className="home-text">
            <div className="home-text-section">{t("homeTextHistory")}</div>
            <ProductCard
              imageSrc={mainDish}
              altText={"h"}
              buttonName={"Classic Mainstay"}
            />
            <ProductCard
              imageSrc={dessert}
              altText={"h"}
              buttonName={"Dessert Euphoria"}
            />
            <div className="home-text-section">{t("homeTextProducts")}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
