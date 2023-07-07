import DishCard from "../components/DishCard";
import greekSpinachQuiche from "../images/GreekQuiche.jpg";
import greekRatatouille from "../images/GreekBakedRata.jpg";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu-container">
      <DishCard
        image={greekSpinachQuiche}
        title="Greek Spinach Quiche"
        description="
        Greek Spinach Quiche: A delightful dish that combines the flavors of creamy and savory filling. This quiche features a golden, flaky crust filled with a luscious mixture of spinach, feta cheese, onions, and aromatic herbs. The harmonious blend of tangy feta, earthy spinach, and fragrant herbs creates a mouthwatering experience."
      />
      <DishCard
        image={greekRatatouille}
        title="Greek Ratatouille"
        description="Greek Ratatouille: A medley of fresh vegetables such as eggplant, zucchini, bell peppers, and tomatoes, all simmered together with herbs and spices. Bursting with Mediterranean flavors, this hearty and healthy dish offers a perfect balance of textures and tastes. Each spoonful unveils tender vegetables infused with fragrant herbs, creating a harmonious blend that is both satisfying and comforting."
      />
    </div>
  );
}

export default Menu;
