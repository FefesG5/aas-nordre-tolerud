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
      "Indulge in the simple yet delightful taste of Caprese Crostini. Crispy crostini slices are topped with fresh, juicy tomatoes, creamy mozzarella, and a hint of aromatic basil — a vibrant trio that brings the spirit of Italy to every bite. Finished with a drizzle of balsamic reduction, it's a timeless appetizer that pairs perfectly with any occasion.",
  },
  {
    isProductCard: true,
    imageSrc: lasagnaMain,
    altText: "Lasagna being served onto a plate.",
    buttonName: "Classic Mainstay",
    dishName: "Lasagna",
    theme: "Classic Mainstay",
    description:
      "Experience the comforting embrace of classic Lasagna, where layers of tender pasta harmoniously unite with rich, hearty meat sauce and a creamy béchamel. Each bite delivers a perfect symphony of flavors, with generous sprinkles of mozzarella and parmesan cheese adding a luxurious touch. A timeless Italian delight that promises satisfaction in every layer.",
  },
  {
    isProductCard: true,
    imageSrc: europeanTheme,
    altText: "Simple spaghetti Aglio Olio on a grey ceramic plate",
    buttonName: "Continental Elegance",
    dishName: "Spaghetti Aglio Olio",
    theme: "Continental Elegance",
    description:
      "Savor the elegant simplicity of Spaghetti Aglio Olio, where perfectly cooked spaghetti combines with a fragrant blend of garlic and top-quality olive oil. Tossed with a generous sprinkling of red pepper flakes and freshly chopped parsley, this dish delivers a subtle heat and a refreshing herbaceous note, offering a true celebration of Italian flavors in every forkful.",
  },
  {
    isProductCard: true,
    imageSrc: mediterraneanTheme,
    altText: "Several bruschetta being served on a wooden chopping board",
    buttonName: "Mediterranean Banquet",
    dishName: "Bruschetta",
    theme: "Mediterranean Banquet",
    description:
      "Delight in the freshness of Bruschetta, a classic Italian starter that showcases ripe, juicy tomatoes atop crisp, grilled bread. Each piece is adorned with fresh basil and a drizzle of extra virgin olive oil, creating a harmonious blend of textures and flavors that dance delightfully on your palate. It's a vibrant start to any meal, promising a burst of Mediterranean sunshine with every bite.",
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
      "Treat yourself to the rich yet nourishing delight of Wholemeal Waffles. Crafted with whole grains, these waffles present a hearty and fulfilling base, ready to be topped with your choice of sweet delights - be it a scoop of velvety ice cream, a drizzle of golden honey, or a sprinkle of fresh berries. It's a canvas for your dessert dreams, offering both indulgence and wholesome goodness in every bite.",
  },
  {
    isProductCard: true,
    imageSrc: cocktails,
    altText: "Generous slice of Grapefruit served with a cocktail drink",
    buttonName: "Crafted Chemistry",
    dishName: "Grapefruit Oasis",
    theme: "Crafted Chemistry",
    description:
      "Dive into the refreshing experience of the Grapefruit Oasis, a cocktail that perfectly balances tartness and sweetness. Crafted with freshly squeezed grapefruit juice, this vibrant drink invites a burst of citrus joy in every sip, paired seamlessly with a touch of premium spirits to add depth and excitement. Garnished with a grapefruit slice, it's your personal oasis of refreshing flavors, promising a sophisticated and refreshing escape in every glass.",
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
