import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CartItems from "./components/CartItems";

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
        path: "/shop/cart",
        element: <CartItems />,
      },
    ],
  },
  {
    path: "/cart",
    element: <CartPage />,
    children: [
      {
        path: "/cart/items",
        element: <div>Your Items</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
