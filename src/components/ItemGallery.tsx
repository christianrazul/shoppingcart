import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useCart } from "@/contexts/CartContext";
import { Skeleton } from "./ui/skeleton";

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ItemGalleryProps {
  category: string | undefined;
}

const ItemGallery = ({ category }: ItemGalleryProps) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    setIsLoading(true);

    // if there is a category selected
    if (category !== undefined) {
      const fetchData = async () => {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/" + category,
        );
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

      return;
    }

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
  }, [category]);

  return (
    <ul className="flex w-full flex-wrap gap-4">
      {isLoading ? (
        <div className="flex gap-4">
          <Skeleton className="h-72 w-52 rounded-xl bg-white" />
          <Skeleton className="h-72 w-52 rounded-xl bg-white" />
          <Skeleton className="h-72 w-52 rounded-xl bg-white" />
        </div>
      ) : (
        items.map((item) => (
          <ItemCard
            item={item}
            key={item.id}
            onAddToCart={(item) => addToCart(item)}
          />
        ))
      )}
    </ul>
  );
};

export default ItemGallery;
