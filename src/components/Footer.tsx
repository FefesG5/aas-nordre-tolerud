import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "../styles/footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer-container">
      <div className="copyright-section">
        <span className="author-name">@ 2023 Gee Chai</span>
        <span className="rights-text">{t("allRightsReserved")}</span>
      </div>
      <Link to="/attributions" className="attribution-page-link">
        {t("attributions")}
      </Link>
      <div className="unsplash-attribution-container">
        <span className="photo-courtesy-unsplash">
          {t("courtesyOf")}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="unsplash-link"
          >
            Unsplash
          </a>
        </span>
      </div>
      <div className="icon-attribution-container">
        <span className="icons-courtesy-flaticon">
          {t("iconsCourtesyOf")}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="geek-click-link"
          >
            Flaticon
          </a>
        </span>
      </div>
    </div>
  );
}
