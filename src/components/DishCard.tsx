import "../styles/dishCard.css";

interface DishCardProps {
  image: string;
  title: string;
  description: string;
}

function DishCard({ image, title, description }: DishCardProps) {
  return (
    <div className="dish-card-container">
      <h3 className="dish-card-title">{title}</h3>
      <img className="dish-card-image" src={image} alt={title} />
      <p className="dish-card-description">{description}</p>
    </div>
  );
}

export default DishCard;
