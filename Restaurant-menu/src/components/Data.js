import Salad from "../assets/Salad.jpg";
import Cheesecake from "../assets/Cheesecake.jpg"
import ChickenWrap from "../assets/ChickenWrap.jpg"
import ChocolateMousse from "../assets/ChocolateMousse.jpg"
import GarlicBread from "../assets/GarlicBread.jpg"
import IcedLemonTea from "../assets/IcedLemonTea.jpg"
import Pasta from "../assets/Pasta.jpg"
import Pizza from "../assets/Pizza.jpg"
import Salmon from "../assets/Salmon.jpg"
import TomatoSoup from "../assets/TomatoSoup.jpg"

const menuItems = [
  {
    id: 1,
    image: Salad,
    name: "Caesar Salad",
    category: "Starter",
    price: "$8",
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan."
  },
  {
    id: 2,
    image: TomatoSoup,
    name: "Tomato Basil Soup",
    category: "Starter",
    price: "$7",
    description: "Warm tomato soup finished with fresh basil and olive oil."
  },
  {
    id: 3,
    image: GarlicBread,
    name: "Garlic Bread",
    category: "Starter",
    price: "$5",
    description: "Toasted bread topped with garlic butter and parsley."
  },


  {
    id: 4,
    image: IcedLemonTea,
    name: "Lemon Iced Tea",
    category: "Drink",
    price: "$4",
    description: "Refreshing iced tea with lemon and a hint of mint."
  },


  {
    id: 5,
    image: Pasta,
    name: "Creamy Alfredo Pasta",
    category: "Main",
    price: "$14",
    description: "Fettuccine tossed in a rich garlic cream sauce with parmesan."
  },
  {
    id: 6,
    image: Pizza,
    name: "Margherita Pizza",
    category: "Main",
    price: "$12",
    description: "Classic pizza with tomato, mozzarella, and fresh basil."
  },
  {
    id: 7,
    image: Salmon,
    name: "Grilled Salmon",
    category: "Main",
    price: "$18",
    description: "Salmon fillet served with lemon butter and seasonal vegetables."
  },
  {
    id: 8,
    image: ChickenWrap,
    name: "Chicken Wrap",
    category: "Main",
    price: "$11",
    description: "Grilled chicken, lettuce, tomato, and ranch wrapped in a tortilla."
  },


  {
    id: 9,
    image: Cheesecake,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    price: "$9",
    description: "Creamy cheesecake topped with fresh strawberries."
  },
  {
    id: 10,
    image: ChocolateMousse,
    name: "Chocolate Mousse",
    category: "Dessert",
    price: "$8",
    description: "Light chocolate mousse with whipped cream and cocoa dust."
  }
];
export default menuItems;