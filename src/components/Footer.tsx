import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";
import { Link } from "react-router-dom";

import Attribution from "./Attribution";
import IconAttribution from "./IconAttribution";

import attributions from "../data/attributionData";

export default function Footer() {
  const { t } = useTranslation();

  const unsplashAttributionList = attributions.map((attribution, index) => (
    <Attribution
      key={index}
      href={attribution.href}
      translationKey="takenBy"
      dishName={attribution.dishName}
      photographer={attribution.photographer}
    />
  ));

  return (
    <>
      <div className="footer-container">
        @ 2023 Gee Chai | {t("allRightsReserved")}
        <Link to="/attributions" className="attributions-link">
          {t("viewAllAttributions")}
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
              {" "}
              Unsplash:
            </a>
          </h3>
          {unsplashAttributionList}
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
              {" "}
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
    </>
  );
}
