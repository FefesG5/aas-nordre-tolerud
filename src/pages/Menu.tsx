import DishCard from "../components/DishCard";
import greekSpinachQuiche from "../images/GreekQuiche.jpg";
import greekRatatouille from "../images/GreekBakedRata.jpg";
import chickenBaconCrunchSalad from "../images/chickenBaconCrunchSalad.jpg";
import jalapenoPepperMacAndCheese from "../images/jalapenoPepperMacAndCheese.jpg";
import { useTranslation } from "react-i18next";
import "../styles/menu.css";

function Menu() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("featuredCuisineTitle")}</h2>
      <div className="menu-container">
        <DishCard
          image={chickenBaconCrunchSalad}
          title={t("dishCard.chickenBaconCrunchSaladTitle")}
          description={t("dishCard.chickenBaconCrunchSaladDescription")}
        />
        <DishCard
          image={jalapenoPepperMacAndCheese}
          title={t("dishCard.jalapenoPepperMacAndCheeseTitle")}
          description={t("dishCard.jalapenoPepperMacAndCheeseDescription")}
        />
      </div>
      <h2>{t("mediterraneanCuisineTitle")}</h2>
      <div className="menu-container">
        <DishCard
          image={greekSpinachQuiche}
          title={t("dishCard.greekSpinachQuicheTitle")}
          description={t("dishCard.greekSpinachQuicheDescription")}
        />
        <DishCard
          image={greekRatatouille}
          title={t("dishCard.greekRatatouilleTitle")}
          description={t("dishCard.greekRatatouilleDescription")}
        />
      </div>
    </>
  );
}

export default Menu;
