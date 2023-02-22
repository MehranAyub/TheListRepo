export interface User {
  id: string;
  fName: string;
  lName: string;
  email: string;
  password: string;
  lists: List[] | null;
}

export interface List {
  id: string;
  title: string | null;
  occasion: string | null;
  date: string | null;
  note: string | null;
  listItems: ListItems[] | null;
  linkItems: LinkItems[] | null;
  userId: string;
  user: User | null;
}

export interface ListItems {
  id: string;
  title: string | null;
  quantity: number | null;
  productId: string;
  product: Product | null;
  listId: string;
  list: List | null;
}

export interface LinkItems {
  id: string;
  title: string | null;
  link: string | null;
  quantity: number | null;
  listId: string | null;
  list: List | null;
}

export interface Category {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  storeLink: string | null;
  image: string | null;
  categoryId: string;
  category: Category | null;
}
