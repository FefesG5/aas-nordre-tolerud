import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer-container">
        @ 2023 Gee Chai | {t("allRightsReserved")}
        <div className="attribution-link flag-attribution-container">
          <a
            href="https://www.flaticon.com/free-icons/norway"
            title="norway icons"
            target="_blank"
            rel="noopener noreferrer"
            className="flaticon-link"
          >
            <img src={NorwayIcon} className="footer-flag-icon" alt="" />
          </a>
          <a
            href="https://www.flaticon.com/free-icons/uk"
            title="uk icons"
            target="_blank"
            rel="noopener noreferrer"
            className="flaticon-link"
          >
            <img src={UnitedKingdomIcon} className="footer-flag-icon" alt="" />
          </a>
          <p>{t("geekClickIconsAttributionText")}</p>
        </div>
        <div>
          <a
            href="https://unsplash.com/photos/vIm26fn_QKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            className="attribution-link"
          >
            {t("panzanellaAttributionText")}
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
