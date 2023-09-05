import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

import Attribution from "./Attribution";

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
          <Attribution
            href="https://unsplash.com/photos/vIm26fn_QKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="panzanellaAttributionText"
          />
          <Attribution
            href="https://unsplash.com/@foodistika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="capreseCrostiniAttributionText"
          />
          <Attribution
            href="https://unsplash.com/@stefentan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="lasagnaAttributionText"
          />
          <Attribution
            href="https://unsplash.com/@youjeencho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="aglioOlioAttributionText"
          />
          <Attribution
            href="https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="bruschettaAttributionText"
          />
          <Attribution
            href="https://unsplash.com/photos/GJAHkC6UMf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="wholemealWafflesAttributionText"
          />
          <Attribution
            href="https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="grapefruitOasisAttributionText"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
