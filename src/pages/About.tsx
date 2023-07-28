import ingvar from "../images/Ingvar.jpg";
import "../styles/about.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <h2>{t("meetIngvarTitle")}</h2>
      <img
        src={ingvar}
        alt="Owner sitting on a rock in Engerdal"
        className="about-image"
      />
      <p className="about-text">{t("about-text-1")}</p>
      <p className="about-text">{t("about-text-2")}</p>
    </div>
  );
}

export default About;
