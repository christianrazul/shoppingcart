import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default CartPage;
