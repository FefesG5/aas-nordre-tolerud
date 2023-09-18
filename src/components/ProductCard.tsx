import "../styles/productCard.css";

interface ProductCardProps {
  isProductCard: boolean;
  imageSrc: string;
  altText?: string;
  linkTo?: string;
  buttonName?: string;
  dishName: string;
  theme?: string;
  description?: string;
}

export default function ProductCard({
  imageSrc,
  altText,
  linkTo,
  buttonName,
  dishName,
}: ProductCardProps) {
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
      <p className="dish-name-title">{dishName}</p>
      <div className="card-button">
        <button>{buttonName}</button>
      </div>
    </div>
  );
}
