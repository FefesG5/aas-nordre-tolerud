import DishCard from "../components/DishCard";

import { useTranslation } from "react-i18next";
import "../styles/menu.css";

import productCardImages from "../data/productCardImagesData";

export default function Menu() {
  const { t } = useTranslation();

  interface Product {
    isProductCard: boolean;
    imageSrc: string;
    altText: string;
    buttonName?: string;
    dishName: string;
    theme: string;
    description: string;
  }

  const dishesByTheme = productCardImages.reduce<Record<string, Product[]>>(
    (productsByThemeAccumulator, product) => {
      if (!productsByThemeAccumulator[product.theme]) {
        productsByThemeAccumulator[product.theme] = [];
      }

      productsByThemeAccumulator[product.theme].push(product);

      return productsByThemeAccumulator;
    },
    {}
  );

  return (
    <>
      {Object.entries(dishesByTheme).map(([theme, products], index) => (
        <div key={index} className="menu-section">
          <h2>{theme}</h2>
          <div className="menu-container">
            {products.map((product, index) => (
              <DishCard
                key={index}
                imageSrc={product.imageSrc}
                altText={product.altText}
                dishName={product.dishName}
                description={product.description}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
