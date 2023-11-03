import DishCard from "../components/DishCard";
import ScrollBtn from "../components/ScrollBtn";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import menuData from "../data/menuData";

import "../styles/menu.css";
import { useEffect, useState } from "react";

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
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dishesByTheme = menuData
    .filter((item) => !item.isBanner)
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
      <ScrollBtn onClick={goToTopOfPage} show={showTopBtn} />
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
    </>
  );
}
