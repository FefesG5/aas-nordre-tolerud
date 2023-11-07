import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/productCard.css";

interface ProductCardProps {
  isProductCard: boolean;
  imageSrc: string;
  altText: string;
  linkTo: string;
  buttonName: string;
  dishName: string;
  width: number;
  height: number;
  onButtonClick?: () => void;
}

export default function ProductCard({
  imageSrc,
  altText,
  linkTo,
  buttonName,
  dishName: dishNameKey,
  width,
  height,
}: ProductCardProps) {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  // const navigateToMenuSection = () => {
  //   if (linkTo) {
  //     navigate(`menu/#${linkTo}`);
  //   }
  // };

  return (
    <Link to={`/menu/#${linkTo}`} className="product-card-link">
      <div className="product-card">
        <img
          src={imageSrc}
          alt={altText}
          width={width}
          height={height}
          className="card-image"
          loading="lazy"
        />
        <p className="dish-name-title">{t(dishNameKey)}</p>
        <div className="card-button">
          <button>{buttonName}</button>
        </div>
      </div>
    </Link>
  );
}
