import { Item } from "@/pages/ShopPage";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";

const HeroCarousel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Items unavailable.");
      }
      const data: Item[] = await response.json();
      setItems(data);
      setIsLoading(false);
    };

    fetchData().catch((error) =>
      console.error("Fetching items failed:", error),
    );
  }, []);

  return isLoading ? (
    <div className="flex w-full items-center justify-center gap-8">
      <Skeleton className="h-[300px] w-[250px] rounded-xl" />
      <Skeleton className="h-[300px] w-[250px] rounded-xl" />
      <Skeleton className="h-[300px] w-[250px] rounded-xl" />
    </div>
  ) : (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            className="flex items-center justify-center md:basis-1/2 lg:basis-1/3"
          >
            <div className="flex aspect-square items-center justify-center  p-1">
              <img
                src={item.image}
                className="h-[300px] w-[200px] object-contain "
              ></img>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
