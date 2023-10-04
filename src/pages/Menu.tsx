import DishCard from "../components/DishCard";

import { useTranslation } from "react-i18next";
import "../styles/menu.css";

import menuArray from "../data/menuData";

export default function Menu() {
  const { t } = useTranslation();

  interface MenuArray {
    isProductCard: boolean;
    imageKey: string;
    imageSrc: string;
    theme: string;
  }

  const dishesByTheme = menuArray.reduce<Record<string, MenuArray[]>>(
    (accumulator: Record<string, MenuArray[]>, product: MenuArray) => {
      if (!accumulator[product.theme]) {
        accumulator[product.theme] = [];
      }

      accumulator[product.theme].push(product);

      return accumulator;
    },
    {} as Record<string, MenuArray[]>
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
                altText={t(`dishCard.${product.imageKey}.altText`)}
                dishName={t(`dishCard.${product.imageKey}.name`)}
                description={t(`dishCard.${product.imageKey}.description`)}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
