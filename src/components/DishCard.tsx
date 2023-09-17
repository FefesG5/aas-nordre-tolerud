import "../styles/dishCard.css";

interface DishCardProps {
  imageSrc: string;
  altText?: string;
  linkTo?: string;
  buttonName?: string;
  dishName: string;
  theme?: string;
  description?: string;
}

function DishCard({ imageSrc, dishName, description }: DishCardProps) {
  return (
    <div className="dish-card-container">
      <h3 className="dish-card-title">{dishName}</h3>
      <img className="dish-card-image" src={imageSrc} alt={dishName} />
      <p className="dish-card-description">{description}</p>
    </div>
  );
}

export default DishCard;
