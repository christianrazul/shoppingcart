import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { CartItem } from "@/pages/ShopPage";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

interface NavBarProps {
  quantity?: number;
  cartItems?: CartItem;
}

const categories: string[] = [
  "Electronics",
  "Jewelry",
  "Men's Clothing",
  "Women's Clothing",
];

const NavBar = ({ quantity = 0 }: NavBarProps) => {
  return (
    <div className="flex w-full justify-between border-b px-20 py-2 shadow-sm md:px-24 lg:px-32 xl:px-48 2xl:px-96">
      <div className="flex items-center gap-4">
        <ShoppingBag />
        <p className="font-semibold">Market</p>
      </div>

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
                    to={`/shop/${category}`}
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    )}
                  >
                    {category}
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
            <NavLink to="/shop/cart" className={navigationMenuTriggerStyle()}>
              Cart
              <ShoppingCart size={16} className="mx-2" />
              {quantity}
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
