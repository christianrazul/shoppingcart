import React, { useEffect, useState } from "react";
import ItemCard from './ItemCard';

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ItemGallery = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch items from the API
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Items unavailable.");
      }
      const data: Item[] = await response.json();
      setItems(data);
      setIsLoading(false);
    };

    fetchData().catch((error) =>
      console.error("Fetching items failed:", error),
    );
  }, []);

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

  return (
    <div className="flex flex-col gap-4">
      <h1 className="w-full text-xl font-semibold">Just for you</h1>
      <ul className="flex w-full flex-wrap gap-4">
        {isLoading ? (
          <h1>Loading Items...</h1>
        ) : (
          items.map((item) => (
            <ItemCard
              item={item}
              key={item.id}
              onAddToCart={(item, quantity) => addToCart(item, quantity)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ItemGallery;
