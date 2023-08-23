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
      <img src={imageSrc} alt={altText} className="card-image" loading="lazy" />
      <div className="card-button">
        <button>Button</button>
      </div>
    </div>
  );
}
