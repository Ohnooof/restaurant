
import type { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Breakfast",
    items: [
      {
        name: "Andean Sunrise Scramble",
        description: "A hearty scramble celebrating the Andes, where potatoes were first domesticated.",
        ingredients: "Eggs (Old World), Potatoes, Tomatoes, Bell Peppers (New World), Avocado (New World), Wheat Toast (Old World)",
        price: "$16",
        image: "https://picsum.photos/seed/breakfast1/800/600"
      },
      {
        name: "Maize & Maple Pancakes",
        description: "Fluffy cornmeal pancakes sweetened with the iconic syrup of the Americas.",
        ingredients: "Cornmeal, Maple Syrup (New World), Berries, Whipped Cream (Old World)",
        price: "$14",
        image: "https://picsum.photos/seed/breakfast2/800/600"
      }
    ]
  },
  {
    title: "Lunch",
    items: [
      {
        name: "Galleon's Bounty Salad",
        description: "A vibrant salad loaded with treasures from both sides of the Atlantic.",
        ingredients: "Chicken (Old World), Mixed Greens (Old World), Black Beans, Corn, Quinoa, Chili-Lime Vinaigrette (New World)",
        price: "$18",
        image: "https://picsum.photos/seed/lunch1/800/600"
      },
      {
        name: "The Potosí Pulled Pork",
        description: "Named after the silver mountain, this sandwich is a true treasure of flavor.",
        ingredients: "Pork (Old World), New World Spices, Potato Bun, Sweet Potato Fries (New World)",
        price: "$19",
        image: "https://picsum.photos/seed/lunch2/800/600"
      }
    ]
  },
  {
    title: "Dinner",
    items: [
      {
        name: "Cacao-Rubbed Steak",
        description: "A bold fusion of Old World cattle with the divine 'food of the gods' from the New World.",
        ingredients: "Beef Steak (Old World), Cacao, Chili (New World), Roasted Root Vegetables (Mixed)",
        price: "$34",
        image: "https://picsum.photos/seed/dinner1/800/600"
      },
      {
        name: "Transatlantic Paella",
        description: "A classic Spanish dish reimagined with essential ingredients from the Americas.",
        ingredients: "Saffron Rice, Chicken, Sausage (Old World), Bell Peppers, Tomatoes, Beans (New World)",
        price: "$28",
        image: "https://picsum.photos/seed/dinner2/800/600"
      }
    ]
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Vanilla Bean Panna Cotta",
        description: "A silky Italian dessert elevated by the exotic vanilla orchid of Mesoamerica.",
        ingredients: "Cream, Sugar (Old World), Vanilla (New World), Berry Coulis (Mixed)",
        price: "$12",
        image: "https://picsum.photos/seed/dessert1/800/600"
      },
      {
        name: "Spiced Chocolate Lava Cake",
        description: "A decadent molten cake with the warmth of New World chili and Old World spice.",
        ingredients: "Chocolate, Chili (New World), Cinnamon (Old World), Coffee Ice Cream (Old World)",
        price: "$13",
        image: "https://picsum.photos/seed/dessert2/800/600"
      }
    ]
  },
  {
    title: "Beverages",
    items: [
      {
        name: "Columbian Brew",
        description: "A rich, aromatic coffee, celebrating the journey of this beloved bean from Africa to the Americas.",
        ingredients: "Coffee (Old World), Cane Sugar (Old World)",
        price: "$5",
        image: "https://picsum.photos/seed/bev1/800/600"
      },
      {
        name: "Spiced Pineapple Fresca",
        description: "A refreshing tropical drink, a symbol of hospitality in the Caribbean.",
        ingredients: "Pineapple, Lime (New World), Cinnamon, Clove (Old World)",
        price: "$7",
        image: "https://picsum.photos/seed/bev2/800/600"
      }
    ]
  }
];
