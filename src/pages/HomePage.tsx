import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Github, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="flex h-full flex-col items-center justify-center gap-12 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-3xl font-semibold">
            Welcome to the Future of Shopping Exceptional Quality, Unbeatable
            Prices
          </h1>
          <p>Check out some of our best sellers!</p>
        </div>
        <HeroCarousel />
        <div className="flex gap-4">
          <Button>
            <ShoppingBag className="mr-2 h-4 w-4" />
            <NavLink to="/shop">Shop Now</NavLink>
          </Button>
          <Button variant="secondary">
            <Github className="mr-2 h-4 w-4" />
            <a
              href="https://github.com/christianrazul/shoppingcart"
              target="_blank"
            >
              GitHub Repo
            </a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
