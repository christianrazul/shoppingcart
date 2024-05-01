import HeroCarousel from "@/components/HeroCarousel";
import NavBar from "@/components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-8 flex h-full w-full flex-col gap-8 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <h1 className=" text-center text-xl font-semibold">
          Welcome to the Future of Shopping Exceptional Quality, Unbeatable
          Prices
        </h1>

        <HeroCarousel />
      </div>
    </>
  );
};

export default HomePage;
