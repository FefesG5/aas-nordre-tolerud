import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/about-gallery-custom.css";

import ingvarSitting from "../images/IngvarSitting.jpg";
import "../styles/about.css";
import { useTranslation } from "react-i18next";
import ScrollBtn from "../components/ScrollBtn";

import GingerHouseView from "../images/AasNordreTolerud/GingerHouseView.png";
import GingerHouseViewThumbnail from "../images/AasNordreTolerud/GingerHouseViewThumbnail.png";

import GingerHouseBack2 from "../images/AasNordreTolerud/GingerHouseBack2.png";
import GingerHouseBack2Thumbnail from "../images/AasNordreTolerud/GingerHouseBack2Thumbnail.png";

const images = [
  {
    original: GingerHouseView,
    thumbnail: GingerHouseViewThumbnail,
  },
  {
    original: GingerHouseBack2,
    thumbnail: GingerHouseBack2Thumbnail,
  },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <ImageGallery items={images} lazyLoad={true} />
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
