export interface User {
  id: string;
  fName: string;
  lName: string;
  email: string;
  password: string;
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
}

export interface ListItems {
  id: string;
  title: string | null;
  quantity: number | null;
  price: string;
  storeLink: string | null;
  image: string | null;
}

export interface LinkItems {
  id: string;
  title: string | null;
  link: string | null;
  quantity: number | null;
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
}
