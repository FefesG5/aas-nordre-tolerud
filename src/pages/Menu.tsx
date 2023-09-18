import DishCard from "../components/DishCard";

import { useTranslation } from "react-i18next";
import "../styles/menu.css";

import productCardImages from "../data/productCardImagesData";

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
