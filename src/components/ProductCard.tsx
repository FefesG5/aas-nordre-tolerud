import "../styles/productCard.css";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  linkTo?: string;
}

export default function ProductCard({
  imageSrc,
  altText,
  linkTo,
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
      <div className="card-button">
        <button>Button</button>
      </div>
    </div>
  );
}
