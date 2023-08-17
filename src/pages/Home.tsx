import { useTranslation } from "react-i18next";
import "../styles/home.css";
import Panzanella from "../images/Panzanella.jpg";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      {" "}
      <div className="home-container">
        <div className="background-image">
          <h1 className="image-heading">{t("headline")}</h1>
        </div>
        <div className="overlay"></div>
        <div className="text-container">
          <h2 className="home-heading">{t("AasNordreTolerudGard")}</h2>
          <p className="home-text">{t("homeText")}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
