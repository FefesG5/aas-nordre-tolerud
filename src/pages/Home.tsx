import { useTranslation } from "react-i18next";
import gingerHouseView from "../images/GingerHouseView.jpg";
import "../styles/home.css";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <h2>{t("AasNordreTolerudGard")}</h2>
      <img className="home-image" src={gingerHouseView} alt="" />
      <p className="home-text">{t("homeText")}</p>
    </div>
  );
}

export default Home;
