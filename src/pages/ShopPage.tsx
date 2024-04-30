import ItemGallery from "@/components/ItemGallery";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const params = useParams();

  console.log(params);

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
    <div className="flex h-screen flex-col">
      <NavBar quantity={cartItems.length} />
      <div className="flex h-full flex-col gap-8 bg-gray-100 px-20 pt-4 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <ItemGallery category={params.category} />
      </div>
    </div>
  );
};

export default ShopPage;
