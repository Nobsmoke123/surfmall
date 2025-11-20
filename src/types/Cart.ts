import type { Product } from "./Product";

export type Cart = {
  cart: CartProduct[];
  cartCount: number;
  amount: number;
};

export type CartProduct = {
  id: string;
  product: Product;
  quantity: number;
  price: number;
};
