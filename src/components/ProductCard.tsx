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
    <div>
      <img src={imageSrc} alt={altText} className="product-card" />
    </div>
  );
}
