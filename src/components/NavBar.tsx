import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";
import { CartItem } from "@/pages/ShopPage";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const categories: { name: string; slug: string }[] = [
  { name: "Electronics", slug: "electronics" },
  { name: "Jewelry", slug: "jewelery" },
  { name: "Men's Clothing", slug: "men's clothing" },
  { name: "Women's Clothing", slug: "women's clothing" },
];

const NavBar = () => {
  const { cartItems } = useCart();

  const cartItemsQuantity = cartItems.length;

  return (
    <div className="flex w-full justify-between border-b px-20 py-2 shadow-sm md:px-24 lg:px-32 xl:px-48 2xl:px-96">
      <NavLink to="/" className="flex items-center">
        <div className="flex items-center gap-4">
          <ShoppingBag />
          <p className="font-semibold">Market Basket</p>
        </div>
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink to="/" className={navigationMenuTriggerStyle()}>
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[200px] gap-3 p-4">
                {categories.map((category, index) => (
                  <NavLink
                    key={index}
                    to={`/shop/${category.slug}`}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    )}
                  >
                    <div className="text-sm font-medium leading-none">
                      {category.name}
                    </div>
                  </NavLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="/shop" className={navigationMenuTriggerStyle()}>
              Shop
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink to="/cart" className={navigationMenuTriggerStyle()}>
              Cart
              <ShoppingCart size={16} className="mx-2" />
              {cartItemsQuantity}
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
