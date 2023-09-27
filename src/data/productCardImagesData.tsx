import europeanTheme from "../images/EuropeanTheme.jpg";
import lasagnaMain from "../images/Lasagna.jpg";
import dessert from "../images/Desserts.jpg";
import appetizers from "../images/Appetizers.jpg";
import mediterraneanTheme from "../images/MediterraneanTheme.jpg";
import cocktails from "../images/Cocktails.jpg";

import searedScallops from "../images/SearedScallops.jpg";
import amarettiCharlotte from "../images/AmarettiCharlotte.jpg";
import brownieIceCream from "../images/BrownieIceCream.jpg";
import greenSalad from "../images/GreenSalad.jpg";
import baconCheeseBurger from "../images/BaconCheeseBurger.jpg";
import berryBlissPudding from "../images/BerryBlissPudding.jpg";
import savorySalmonToast from "../images/SavorySalmonToast.jpg";
import verdePestoParadiso from "../images/VerdePestoParadiso.jpg";
import rivieraRatatouille from "../images/RivieraRatatouille.jpg";
import quintessentialQuiche from "../images/QuintessentialQuiche.jpg";

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
      "Savor the tart and sweet balance of the Grapefruit Oasis cocktail. Blending fresh juice and premium spirits, it offers citrus joy and depth. Garnished with grapefruit, it’s a refreshing escape in every sip.",
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
  {
    isProductCard: false,
    imageSrc: brownieIceCream,
    altText: "Brownie with a vanilla ice cream on top.",
    dishName: "Brownie Ice Cream",
    theme: "Dessert Euphoria",
    description:
      "This dessert pairs fudgy brownies with velvety ice cream, creating a harmonious dance of textures and sweetness. Each bite offers a euphoric journey through chocolaty peaks and creamy valleys, making it a truly indulgent delight.",
  },
  {
    isProductCard: false,
    imageSrc: greenSalad,
    altText:
      "A vibrant bowl of Green Salad with assorted fresh vegetables and a light vinaigrette.",
    dishName: "Green Salad",
    theme: "Appetizers",
    description:
      "Green Salad is a refreshing mix of assorted green vegetables, often including lettuce, cucumbers, and spinach, dressed lightly with a simple vinaigrette. It’s a crisp and refreshing side that complements a variety of meals.",
  },
  {
    isProductCard: false,
    imageSrc: baconCheeseBurger,
    altText:
      "A succulent bacon cheeseburger with crispy bacon, melty cheese, fresh vegetables, and creamy condiments between toasted buns.",
    dishName: "Bacon Cheese Burger",
    theme: "Classic Mainstay",
    description:
      "A bacon cheeseburger combines a juicy beef patty with crispy bacon and melty cheese, nestled between toasted buns. This savory delight is often garnished with fresh veggies and creamy condiments, offering a burst of flavors with every bite.",
  },
  {
    isProductCard: false,
    imageSrc: berryBlissPudding,
    altText:
      "A vibrant Berry Bliss Pudding featuring assorted berries enveloped in a silky, sweet pudding, representing a harmonious balance of tart and sweet flavors.",
    dishName: "Berry Bliss Pudding",
    theme: "Dessert Euphoria",
    description:
      "Berry Bliss Pudding is a delightful concoction of assorted, juicy berries enveloped in a velvety, sweet pudding base. The symphony of tart and sweet flavors, accompanied by a silky texture, makes this dish a refreshing and indulgent dessert, perfect for any occasion.",
  },
  {
    isProductCard: false,
    imageSrc: savorySalmonToast,
    altText:
      "A vibrant Berry Bliss Pudding featuring assorted berries enveloped in a silky, sweet pudding, representing a harmonious balance of tart and sweet flavors.",
    dishName: "Savory Salmon Toast",
    theme: "Mediterranean Banquet",
    description:
      "Savory Salmon Toast features delicate, smoked salmon layered atop a crisp, golden slice of toast. Complemented by a light spread of creamy herb-infused sauce, creates a harmonious blend of textures and flavors, making it a sophisticated and satisfying dish.",
  },
  {
    isProductCard: false,
    imageSrc: verdePestoParadiso,
    altText:
      "A plate of al dente pasta coated in green pesto, garnished with Parmesan and lemon zest, with basil leaves and pine nuts in the background.",
    dishName: "Verde Pesto Paradiso",
    theme: "Continental Elegance",
    description:
      "Savor the vibrant Verde Pesto Paradiso, a delightful mix of basil, pine nuts, and Parmesan, enveloping al dente pasta. A touch of lemon zest adds a fresh twist to this Italian favorite.",
  },
  {
    isProductCard: false,
    imageSrc: rivieraRatatouille,
    altText:
      "A vibrant dish of roasted vegetables in rich tomato sauce, seasoned with herbs, representing a classic Ratatouille.",
    dishName: "Riviera Ratatouille",
    theme: "Continental Elegance",
    description:
      "Bask in the flavors of our Riviera Ratatouille, a colorful medley of roasted vegetables, seasoned with herbs de Provence and olive oil, embodying the essence of sunny Provence.",
  },
  {
    isProductCard: false,
    imageSrc: quintessentialQuiche,
    altText:
      "A golden-brown quiche with a creamy filling and flaky crust, garnished with fresh herbs.",
    dishName: "Quintessential Quiche",
    theme: "Mediterranean Banquet",
    description:
      "Savor a slice of Quintessential Quiche Elegance, featuring a creamy filling of eggs, cream, cheese, and a medley of vegetables, all encased in a buttery, flaky crust. A symphony of textures and flavors, it's a timeless brunch classic.",
  },
];

export default productCardImages;
