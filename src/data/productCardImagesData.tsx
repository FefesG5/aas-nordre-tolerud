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
import berryMist from "../images/BerryMist.jpg";

const productCardImages = [
  {
    isProductCard: true,
    imageSrc: appetizers,
    altText: "Appetizers on a wooden chopping board",
    buttonName: "Bite-sized Temptation",
    dishName: "Caprese Crostini",
    theme: "Appetizers",
    description:
      "Savor the classic Italian appetizer, Caprese Crostini, featuring crispy slices topped with fresh tomatoes, creamy mozzarella, basil, and a drizzle of balsamic reduction, perfect for any occasion.",
  },
  {
    isProductCard: true,
    imageSrc: lasagnaMain,
    altText: "Lasagna being served onto a plate.",
    buttonName: "Classic Mainstay",
    dishName: "Lasagna",
    theme: "Classic Mainstay",
    description:
      "Indulge in our classic Lasagna, a perfect blend of tender pasta, rich meat sauce, creamy béchamel, mozzarella, and parmesan, delivering a timeless Italian favorite in every bite.",
  },
  {
    isProductCard: true,
    imageSrc: europeanTheme,
    altText: "Simple spaghetti Aglio Olio on a grey ceramic plate",
    buttonName: "Continental Elegance",
    dishName: "Spaghetti Aglio Olio",
    theme: "Continental Elegance",
    description:
      "Enjoy the simplicity of Spaghetti Aglio Olio, combining perfectly cooked spaghetti, fragrant garlic, quality olive oil, red pepper flakes, and fresh parsley for a subtle heat and authentic Italian flavor celebration in every bite.",
  },
  {
    isProductCard: true,
    imageSrc: mediterraneanTheme,
    altText: "Several bruschetta being served on a wooden chopping board",
    buttonName: "Mediterranean Banquet",
    dishName: "Bruschetta",
    theme: "Mediterranean Banquet",
    description:
      "Relish the lively Bruschetta with ripe tomatoes, crisp grilled bread, fresh basil, and a drizzle of olive oil. This classic Italian starter blends textures and flavors for a burst of Mediterranean delight in every bite.",
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
      "Indulge in Wholemeal Waffles made from hearty whole grains, ready for your choice of toppings such as velvety ice cream, golden honey, or fresh berries. This versatile treat provides a delightful balance of indulgence and nourishment.",
  },
  {
    isProductCard: true,
    imageSrc: cocktails,
    altText: "Generous slice of Grapefruit served with a cocktail drink",
    buttonName: "Crafted Chemistry",
    dishName: "Grapefruit Oasis",
    theme: "Crafted Chemistry",
    description:
      "Enjoy the Grapefruit Oasis cocktail, a blend of fresh juice and premium spirits, delivering a tart and sweet balance. Garnished with grapefruit, this drink provides a refreshing escape with each sip.",
  },
  {
    isProductCard: false,
    imageSrc: amarettiCharlotte,
    altText: "Amaretti Charlotte served on an oval ceramic plate",
    dishName: "Amaretti Charlotte",
    theme: "Appetizers",
    description:
      "Savor a French-inspired appetizer with cream-filled pastry shaped like a pouring cup, topped with possibly crumbled amaretti cookies. This dish presents a delightful blend of textures and flavors.",
  },
  {
    isProductCard: false,
    imageSrc: searedScallops,
    altText: "Bite sized scallops appetizers served on a wooden board.",
    dishName: "Seared Scallops",
    theme: "Appetizers",
    description:
      "This delicacy presents perfectly seared scallops in a light herb butter, hinting at exotic flavors. Experience a captivating blend of textures and flavors with a tender interior and crisply seared exterior.",
  },
  {
    isProductCard: false,
    imageSrc: brownieIceCream,
    altText: "Brownie with a vanilla ice cream on top.",
    dishName: "Brownie Ice Cream",
    theme: "Dessert Euphoria",
    description:
      "Pairing fudgy brownies with smooth ice cream, this dessert crafts a symphony of texture and sweetness. Each morsel transports you through indulgent chocolaty highs and creamy lows, epitomizing decadent delight.",
  },
  {
    isProductCard: false,
    imageSrc: greenSalad,
    altText:
      "A vibrant bowl of Green Salad with assorted fresh vegetables and a light vinaigrette.",
    dishName: "Green Salad",
    theme: "Appetizers",
    description:
      "Green Salad blends assorted green vegetables like lettuce, cucumbers, and spinach, lightly dressed with a simple vinaigrette. This crisp, refreshing side harmoniously enhances a myriad of dishes.",
  },
  {
    isProductCard: false,
    imageSrc: baconCheeseBurger,
    altText:
      "A succulent bacon cheeseburger with crispy bacon, melty cheese, fresh vegetables, and creamy condiments between toasted buns.",
    dishName: "Bacon Cheese Burger",
    theme: "Classic Mainstay",
    description:
      "A bacon cheeseburger unites a succulent beef patty, crispy bacon, and melted cheese within toasted buns. Garnished with fresh veggies and creamy condiments, this savory ensemble delivers an explosion of flavors in each mouthful.",
  },
  {
    isProductCard: false,
    imageSrc: berryBlissPudding,
    altText:
      "A vibrant Berry Bliss Pudding featuring assorted berries enveloped in a silky, sweet pudding, representing a harmonious balance of tart and sweet flavors.",
    dishName: "Berry Bliss Pudding",
    theme: "Dessert Euphoria",
    description:
      "Berry Bliss Pudding is a charming mix of juicy, assorted berries nestled in a velvety, sweet base. The interplay of tart and sweet flavors, coupled with a silky texture, renders this dessert both refreshing and indulgent, suitable for any occasion.",
  },
  {
    isProductCard: false,
    imageSrc: savorySalmonToast,
    altText:
      "A vibrant Berry Bliss Pudding featuring assorted berries enveloped in a silky, sweet pudding, representing a harmonious balance of tart and sweet flavors.",
    dishName: "Savory Salmon Toast",
    theme: "Mediterranean Banquet",
    description:
      "Savory Salmon Toast showcases delicate smoked salmon atop a golden, crisp slice of toast. Enhanced by a creamy, herb-infused spread, this dish presents a sophisticated fusion of textures and flavors, proving to be a satisfying delight.",
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
      "Delight in our Riviera Ratatouille, a vibrant medley of roasted vegetables seasoned with herbs de Provence and olive oil, capturing the sunny essence of Provence.",
  },
  {
    isProductCard: false,
    imageSrc: quintessentialQuiche,
    altText:
      "A golden-brown quiche with a creamy filling and flaky crust, garnished with fresh herbs.",
    dishName: "Quintessential Quiche",
    theme: "Mediterranean Banquet",
    description:
      "Relish a slice of Quintessential Quiche Elegance, a creamy mix of eggs, cream, cheese, and vegetables in a buttery crust, embodying a harmonious blend of flavors and textures, a timeless brunch classic.",
  },
  {
    isProductCard: false,
    imageSrc: berryMist,
    altText:
      "A striking cocktail, Berry Mist, with a red blackberry-mint base and a layer of white foam dotted with red, offering a blend of flavors and textures.",
    dishName: "Berry Mist",
    theme: "Crafted Chemistry",
    description:
      "Savor Berry Mist, a blend of tart blackberries and fresh mint, topped with velvety foam and red dots, delivering a sensory delight with its mix of flavors and textures.",
  },
];

export default productCardImages;
