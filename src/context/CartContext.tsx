import { createContext, useContext, useState } from "react";
import type { CartProduct } from "../types/Cart";
import type { Product } from "../types/Product";

export const CartContext = createContext<{
  cart: CartProduct[];
  cartCount: number;
  amount: number;
  addToCart: (newItem: Product) => void;
  removeFromCart: (newItem: Product) => void;
}>({
  cart: [],
  cartCount: 0,
  amount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const addToCart = (newItem: Product) => {
    const existing = cart.find(({ product }) => product.id === newItem.id);
    let newCart: CartProduct[];

    if (existing) {
      // If the item already exists in the cart just increase the quantity and the price accordingly
      newCart = cart.map((item) => {
        if (item.product.id === existing.product.id) {
          item.quantity = item.quantity + 1;
          item.price = item.quantity * item.product.price;
        }
        return item;
      });
    } else {
      // If the item is indeed a new item add it to the cart
      newCart = [
        ...cart,
        {
          id: crypto.randomUUID(),
          product: newItem,
          quantity: 1,
          price: newItem.price,
        },
      ];
    }

    const cartQuantity = newCart
      .slice()
      .reduce((acc: number, item: CartProduct) => {
        return acc + item.quantity;
      }, 0);

    const cartTotalAmount = newCart.reduce((acc: number, item: CartProduct) => {
      return acc + item.price;
    }, 0);

    setCart((_) => [...newCart]);
    setAmount(() => cartTotalAmount);
    setCartCount(() => cartQuantity);
  };

  const removeFromCart = (newItem: Product) => {
    const existing = cart.find(({ product }) => product.id === newItem.id);
    let newCart: CartProduct[] = [];

    if (existing) {
      // If the item already exists in the cart just increase the quantity and the price accordingly
      newCart = cart.map((item) => {
        if (item.product.id === newItem.id) {
          item.quantity = item.quantity - 1;
          item.price = item.quantity * item.price;
        }
        return item;
      });
    }

    const cartQuantity = newCart
      .slice()
      .reduce((acc: number, item: CartProduct) => {
        return acc + item.quantity;
      }, 0);

    const cartTotalAmount = newCart.reduce((acc: number, item: CartProduct) => {
      return acc + item.price;
    }, 0);

    setCart((_) => [...newCart]);
    setAmount(() => cartTotalAmount);
    setCartCount(() => cartQuantity);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartCount, amount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};
