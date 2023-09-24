import "../styles/footer.css";
import { useTranslation } from "react-i18next";
import NorwayIcon from "../images/NorwayIcon.png";
import UnitedKingdomIcon from "../images/UnitedKingdomIcon.png";

import Attribution from "./Attribution";
import IconAttribution from "./IconAttribution";

function Footer() {
  const { t } = useTranslation();

  const attributions = [
    {
      href: "https://unsplash.com/photos/vIm26fn_QKg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Panzanella",
      photographer: "Luisa Brimble",
    },
    {
      href: "https://unsplash.com/@foodistika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Caprese Crostini",
      photographer: "Elena Leya",
    },
    {
      href: "https://unsplash.com/@stefentan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Lasagna",
      photographer: "Stefen Tan",
    },
    {
      href: "https://unsplash.com/@youjeencho?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Aglio Olio",
      photographer: "Youjeen Cho",
    },
    {
      href: "https://unsplash.com/@margzu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Bruschetta",
      photographer: "Margarita Zueva",
    },
    {
      href: "https://unsplash.com/photos/GJAHkC6UMf0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Wholemeal Waffles",
      photographer: "Lindsay Moe",
    },
    {
      href: "https://unsplash.com/@saracervera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Grapefruit Oasis",
      photographer: "Sara Cervera",
    },
    {
      href: "https://unsplash.com/@weekendtripcreator?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Amaretti Charlotte",
      photographer: "Lisha Riabinina",
    },
    {
      href: "https://unsplash.com/@kamilkalb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Seared Scallops",
      photographer: "Kamil Kalbarczyk",
    },
    {
      href: "https://unsplash.com/@kobbymendez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Brownie Ice Cream",
      photographer: "Kobby Mendez",
    },
    {
      href: "https://unsplash.com/@madseneqvist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      dishName: "Green Salad",
      photographer: "Mads Eneqvist",
    },
  ];

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

export default Footer;
