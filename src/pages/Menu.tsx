import DishCard from "../components/DishCard";
import greekSpinachQuiche from "../images/GreekQuiche.jpg";
import greekRatatouille from "../images/GreekBakedRata.jpg";
import chickenBaconSalad from "../images/ChickenBaconSalad.jpg";
import jalapenoPepperMacCheese from "../images/JalapenoPepperMacCheese.jpg";
import ratatouille from "../images/Ratatouille.jpg";
import cauliflowerCheese from "../images/CauliflowerCheese.jpg";
import { useTranslation } from "react-i18next";
import "../styles/menu.css";

import productCardImages from "../data/productCardImagesData";
import ProductCard from "../components/ProductCard";

export default function Menu() {
  const { t } = useTranslation();
  return (
    <>
      {productCardImages.map((product, index) => (
        <div key={index} className="menu-section">
          <h2>{product.theme}</h2>
          <div className="menu-container">
            <DishCard
              imageSrc={product.imageSrc}
              altText={product.altText}
              dishName={product.dishName}
              description={product.description}
            />
          </div>
        </div>
      ))}
    </>
  );
}

{
  /* <h2>{t("featuredCuisineTitle")}</h2>
<div className="menu-container">
  <DishCard
    imageSrc={chickenBaconSalad}
    dishName={t("dishCard.chickenBaconCrunchSaladTitle")}
    description={t("dishCard.chickenBaconCrunchSaladDescription")}
  />
  <DishCard
    imageSrc={jalapenoPepperMacCheese}
    dishName={t("dishCard.jalapenoPepperMacAndCheeseTitle")}
    description={t("dishCard.jalapenoPepperMacAndCheeseDescription")}
  />
  <DishCard
    imageSrc={cauliflowerCheese}
    dishName={t("dishCard.cauliflowerCheeseTitle")}
    description={t("dishCard.cauliflowerCheeseDescription")}
  />
  <DishCard
    imageSrc={ratatouille}
    dishName={t("dishCard.ratatouilleTitle")}
    description={t("dishCard.ratatouilleDescription")}
  />
</div>
<h2>{t("mediterraneanCuisineTitle")}</h2>
<div className="menu-container">
  <DishCard
    imageSrc={greekSpinachQuiche}
    dishName={t("dishCard.greekSpinachQuicheTitle")}
    description={t("dishCard.greekSpinachQuicheDescription")}
  />
  <DishCard
    imageSrc={greekRatatouille}
    dishName={t("dishCard.greekRatatouilleTitle")}
    description={t("dishCard.greekRatatouilleDescription")}
  />
</div> */
}
