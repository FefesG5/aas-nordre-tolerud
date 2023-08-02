import React from "react";
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
        {/* <div className="attribution">
          <a
            href="https://www.flaticon.com/free-icons/norway"
            title="norway icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={NorwayIcon} className="footer-flag-icon" alt="" />
            <p>Norway icons created by GeekClick - Flaticon</p>
          </a>
          <a href="https://www.flaticon.com/free-icons/uk" title="uk icons">
            <img src={UnitedKingdomIcon} className="footer-flag-icon" alt="" />
            <p>Uk icons created by Roundicons - Flaticon</p>
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Footer;
