import { CartItem, Item } from "@/pages/ShopPage";
import { ReactNode, createContext, useContext, useState } from "react";

export const CartItemsContext = createContext<CartItem[] | undefined>(
  undefined,
);

export const useCart = () => useContext(CartItemsContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem>();

  const addToCart = (item: Item, quantity: number) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        // If item exists, map over the array and update the quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        );
      } else {
        // If item doesn't exist, add it with the quantity
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  return (
    <CartItemsContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartItemsContext.Provider>
  );
};
