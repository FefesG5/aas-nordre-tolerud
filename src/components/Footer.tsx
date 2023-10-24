import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../styles/footer.css";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

import IconAttribution from "./IconAttribution";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="copyright-section">
        <span className="author-name">@ 2023 Gee Chai</span>
        <span className="rights-text">{t("allRightsReserved")}</span>
      </div>
      <Link to="/attributions" className="attribution-link">
        {t("attributions")}
      </Link>
      <div className="unsplash-attribution-container">
        <h3>
          {t("courtesyOf")}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="unsplash-link"
          >
            Unsplash:
          </a>
        </h3>
      </div>
      <div className="icon-attribution-container">
        <h3>
          {t("iconsCourtesyOf")}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="geek-click-link"
          >
            Flaticon
          </a>
        </h3>
      </div>
      <div>
        <IconAttribution
          href="https://www.flaticon.com/free-icons/norway"
          title="norway icon"
          icon={NorwayIcon}
        />
        <IconAttribution
          href="https://www.flaticon.com/free-icons/uk"
          title="uk icon"
          icon={UnitedKingdomIcon}
        />
      </div>
    </div>
  );
}
