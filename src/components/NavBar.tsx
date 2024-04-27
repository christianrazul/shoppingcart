import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

interface NavBarProps {
  quantity?: number;
}

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
            <NavLink to="/shop" className={navigationMenuTriggerStyle()}>
              Shop
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cart
              <ShoppingCart size={16} className="mx-2" />
              {quantity}
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
