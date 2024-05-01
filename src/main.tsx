import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "./contexts/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    children: [
      {
        path: "/shop/:category",
      },
    ],
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster />
    </CartProvider>
  </React.StrictMode>,
);
