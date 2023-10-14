import { useTranslation } from "react-i18next";
import "../styles/productCard.css";

interface ProductCardProps {
  isProductCard: boolean;
  imageSrc: string;
  altText: string;
  linkTo?: string;
  buttonName: string;
  dishName: string;
  onButtonClick?: () => void;
}

// need to implement the link to the menu page and correct food item theme

export default function ProductCard({
  imageSrc,
  altText,
  linkTo,
  buttonName,
  dishName: dishNameKey,
  onButtonClick,
}: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <div className="product-card">
      <a href={linkTo} className="card-link">
        <img
          src={imageSrc}
          alt={altText}
          className="card-image"
          loading="lazy"
        />
      </a>
      <p className="dish-name-title">{t(dishNameKey)}</p>
      <div className="card-button">
        <button>{buttonName}</button>
      </div>
    </div>
  );
}
