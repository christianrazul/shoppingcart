import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="flex h-full w-full flex-col items-center justify-center gap-8 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-3xl font-semibold">
            Welcome to the Future of Shopping Exceptional Quality, Unbeatable
            Prices
          </h1>
          <p>Check out some of our best sellers!</p>
        </div>

        <HeroCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
