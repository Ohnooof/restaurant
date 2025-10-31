
export interface MenuItem {
  name: string;
  description: string;
  ingredients: string;
  price: string;
  image: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}
