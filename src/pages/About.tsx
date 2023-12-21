import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/about-gallery-custom.css";

import ingvarSitting from "../images/AasNordreTolerud/IngvarSitting.jpg";
import "../styles/about.css";
import { useTranslation } from "react-i18next";
import ScrollBtn from "../components/ScrollBtn";

import galleryImages from "../data/galleryImages";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="about-page-title">{t("ourKitchen")}</h2>
      <ImageGallery items={galleryImages} lazyLoad={true} />
      <div className="about-container">
        <h2>{t("meetIngvarTitle")}</h2>
        <img
          src={ingvarSitting}
          alt="Owner sitting on a rock in Engerdal"
          className="about-image"
        />
        <p className="about-text">{t("about-text-1")}</p>
        <ScrollBtn />
      </div>
    </>
  );
}
