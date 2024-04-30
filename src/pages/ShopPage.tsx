import Categories from "@/components/Categories";
import ItemCard from "@/components/ItemCard";
import ItemGallery from "@/components/ItemGallery";
import NavBar from "@/components/NavBar";
import { Card, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

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

export interface CartItem extends Item {
  quantity: number;
}

const ShopPage = () => {
  const [categories, setCategories] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // fetch data
  useEffect(() => {
    setIsLoading(true);

    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
      );
      if (!response.ok) {
        throw new Error("Categories unavailable.");
      }
      const categories = await response.json();
      setCategories(categories);
      setIsLoading(false);
    };

    fetchCategories().catch((error) =>
      console.error("Fetching categories failed:", error),
    );
  }, []); // Empty dependency array means this effect runs once after the initial render

  // const selectCategory = (category: string) => {
  //   setIsItemsLoading(true);
  //   fetch(`https://fakestoreapi.com/products/category/${category}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setItems(json);
  //       setIsItemsLoading(false);
  //     });
  // };

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
    <div className="flex w-full flex-col">
      <NavBar quantity={cartItems.length} />
      <div className="flex h-full flex-col gap-8 bg-gray-100 px-20 pt-4 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Categories</h1>
          {isLoading ? (
            <h1>Loading Categories...</h1>
          ) : (
            <Categories
              categories={categories}
              onSelectCategory={(category) => selectCategory(category)}
            />
          )}
        </div>

        <ItemGallery />
      </div>
    </div>
  );
};

export default ShopPage;
