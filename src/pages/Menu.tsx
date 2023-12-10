import DishCard from "../components/DishCard";
import ScrollBtn from "../components/ScrollBtn";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import menuData from "../data/menuData";

import "../styles/menu.css";

interface MenuData {
  isBanner: boolean;
  isProductCard: boolean;
  imageKey: string;
  imageSrc: string;
  theme: string;
  href?: string;
  photographer?: string;
}

export default function Menu() {
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const dishesByTheme = menuData
    .filter((item) => !item.isBanner && item.theme !== "attributions")
    .reduce<Record<string, MenuData[]>>(
      (accumulator: Record<string, MenuData[]>, product: MenuData) => {
        if (!accumulator[product.theme]) {
          accumulator[product.theme] = [];
        }

        accumulator[product.theme].push(product);

        return accumulator;
      },
      {}
    );

  return (
    <>
      {Object.entries(dishesByTheme).map(([theme, products]) => (
        <div key={theme} id={theme} className="menu-section">
          <h2>{t(`themes.${theme}`)}</h2>
          <div className="menu-container">
            {products.map((product) => (
              <DishCard
                key={product.imageKey}
                imageSrc={product.imageSrc}
                altText={t(`dishCard.${product.imageKey}.altText`)}
                dishName={t(`dishCard.${product.imageKey}.name`)}
                description={t(`dishCard.${product.imageKey}.description`)}
              />
            ))}
          </div>
        </div>
      ))}
      <ScrollBtn />
    </>
  );
}
