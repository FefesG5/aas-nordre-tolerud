import "../styles/dishCard.css";

// altText requires ? due to testing components
interface DishCardProps {
  imageSrc: string;
  altText?: string;
  dishName: string;
  description: string;
}

export default function DishCard({
  imageSrc,
  dishName,
  description,
}: DishCardProps) {
  return (
    <div className="dish-card-container">
      <h3 className="dish-card-title">{dishName}</h3>
      <img className="dish-card-image" src={imageSrc} alt={dishName} />
      <p className="dish-card-description">{description}</p>
    </div>
  );
}
