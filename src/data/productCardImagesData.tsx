import europeanTheme from "../images/EuropeanTheme.jpg";
import lasagnaMain from "../images/Lasagna.jpg";
import dessert from "../images/Desserts.jpg";
import appetizers from "../images/Appetizers.jpg";
import mediterraneanTheme from "../images/MediterraneanTheme.jpg";
import cocktails from "../images/Cocktails.jpg";
import searedScallops from "../images/SearedScallops.jpg";

import amarettiCharlotte from "../images/AmarettiCharlotte.jpg";

const productCardImages = [
  {
    isProductCard: true,
    imageSrc: appetizers,
    altText: "Appetizers on a wooden chopping board",
    buttonName: "Bite-sized Temptation",
    dishName: "Caprese Crostini",
    theme: "Appetizers",
    description:
      "Savor the simplicity of Caprese Crostini, featuring crispy slices topped with fresh tomatoes, creamy mozzarella, and aromatic basil. Drizzled with balsamic reduction, this timeless Italian appetizer complements any occasion.",
  },
  {
    isProductCard: true,
    imageSrc: lasagnaMain,
    altText: "Lasagna being served onto a plate.",
    buttonName: "Classic Mainstay",
    dishName: "Lasagna",
    theme: "Classic Mainstay",
    description:
      "Delight in our classic Lasagna, a harmonious blend of tender pasta, rich meat sauce, and creamy béchamel, elevated by flavorful mozzarella and parmesan. A timeless and satisfying Italian favorite in every bite.",
  },
  {
    isProductCard: true,
    imageSrc: europeanTheme,
    altText: "Simple spaghetti Aglio Olio on a grey ceramic plate",
    buttonName: "Continental Elegance",
    dishName: "Spaghetti Aglio Olio",
    theme: "Continental Elegance",
    description:
      "Relish the simplicity of Spaghetti Aglio Olio, a harmonious mix of perfectly cooked spaghetti, fragrant garlic, and high-quality olive oil, spiced with red pepper flakes and fresh parsley. Every forkful offers a subtle heat and a celebration of authentic Italian flavors.",
  },
  {
    isProductCard: true,
    imageSrc: mediterraneanTheme,
    altText: "Several bruschetta being served on a wooden chopping board",
    buttonName: "Mediterranean Banquet",
    dishName: "Bruschetta",
    theme: "Mediterranean Banquet",
    description:
      "Savor the vibrant Bruschetta, featuring ripe tomatoes on crisp grilled bread, adorned with fresh basil and a drizzle of olive oil. This classic Italian starter offers a harmonious blend of textures and flavors, promising a burst of Mediterranean delight in every bite.",
  },
  {
    isProductCard: true,
    imageSrc: dessert,
    altText:
      "Maple syrup drizzled onto brown wholemeal waffles with blueberries",
    buttonName: "Dessert Euphoria",
    dishName: "Wholemeal Waffles",
    theme: "Dessert Euphoria",
    description:
      "Indulge in the wholesome goodness of Wholemeal Waffles. Made with hearty whole grains and ready for your favorite toppings, be it velvety ice cream, golden honey, or fresh berries. This versatile treat offers a delightful balance of indulgence and nourishment with every bite.",
  },
  {
    isProductCard: true,
    imageSrc: cocktails,
    altText: "Generous slice of Grapefruit served with a cocktail drink",
    buttonName: "Crafted Chemistry",
    dishName: "Grapefruit Oasis",
    theme: "Crafted Chemistry",
    description:
      "Experience the refreshing balance of tart and sweet with the Grapefruit Oasis cocktail. Made with fresh grapefruit juice and premium spirits, this drink offers a burst of citrus joy and sophisticated depth in every sip. Garnished with a grapefruit slice, it promises a refreshing escape in every glass.",
  },
  {
    isProductCard: false,
    imageSrc: amarettiCharlotte,
    altText: "Amaretti Charlotte served on an oval ceramic plate",
    dishName: "Amaretti Charlotte",
    theme: "Appetizers",
    description:
      "A French-inspired appetizer featuring a cream-filled pastry shaped like a pouring cup, adorned with a sprinkling of brown topping, possibly crumbled amaretti cookies, offering a delightful mix of textures and flavors in every bite.",
  },
  {
    isProductCard: false,
    imageSrc: searedScallops,
    altText: "Bite sized scallops appetizers served on a wooden board.",
    dishName: "Seared Scallops",
    theme: "Appetizers",
    description:
      "This delicacy features scallops artfully seared to perfection, cradled in a light herb butter that whispers secrets of distant shores. Experience a mesmerizing duet of textures and flavors as each bite offers a tender interior meeting a crisply seared exterior.",
  },
];

export default productCardImages;
