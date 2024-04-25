import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" flex w-full justify-between border-b-2 px-32 py-2 shadow-sm">
      <div className="flex items-center gap-4">
        <ShoppingBag />
        <p>Shopping Cart</p>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/shop">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Shop
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cart
              <ShoppingCart size={16} className="ml-2" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
