import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

import Attribution from "./Attribution";
import IconAttribution from "./IconAttribution";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="footer-container">
        @ 2023 Gee Chai | {t("allRightsReserved")}
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
          <Attribution
            href="https://unsplash.com/photos/vIm26fn_QKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Panzanella"
            photographer="Luisa Brimble"
          />
          <Attribution
            href="https://unsplash.com/@foodistika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Caprese Crostini"
            photographer="Elena Leya"
          />
          <Attribution
            href="https://unsplash.com/@stefentan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Lasagna"
            photographer="Stefen Tan"
          />
          <Attribution
            href="https://unsplash.com/@youjeencho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Aglio Olio"
            photographer="Youjeen Cho"
          />
          <Attribution
            href="https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Bruschetta"
            photographer="Margarita Zueva"
          />
          <Attribution
            href="https://unsplash.com/photos/GJAHkC6UMf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Wholemeal Waffles"
            photographer="Lindsay Moe"
          />
          <Attribution
            href="https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            translationKey="takenBy"
            dishName="Grapefruit Oasis"
            photographer="Sara Cervera"
          />
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

export default Footer;
