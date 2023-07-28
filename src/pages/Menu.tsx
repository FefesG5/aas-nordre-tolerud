import DishCard from "../components/DishCard";
import greekSpinachQuiche from "../images/GreekQuiche.jpg";
import greekRatatouille from "../images/GreekBakedRata.jpg";
import chickenBaconCrunchSalad from "../images/ChickenBaconCrunchSalad.jpg";
import jalapenoPepperMacAndCheese from "../images/JalapenoPepperMacAndCheese.jpg";
import ratatouille from "../images/Ratatouille.jpg";
import cauliflowerCheese from "../images/CauliflowerCheese.jpg";
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
        <DishCard
          image={cauliflowerCheese}
          title={t("dishCard.cauliflowerCheeseTitle")}
          description={t("dishCard.cauliflowerCheeseDescription")}
        />
        <DishCard
          image={ratatouille}
          title={t("dishCard.ratatouilleTitle")}
          description={t("dishCard.ratatouilleDescription")}
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
