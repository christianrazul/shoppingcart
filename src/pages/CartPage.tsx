import NavBar from "@/components/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CartItem } from "./ShopPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default CartPage;
