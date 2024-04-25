import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Item {
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

const ShopPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Item[] = await response.json();
      setItems(data);
    };

    fetchData().catch((error) =>
      console.error("Fetching items failed:", error),
    );
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      <NavBar />
      <div className="flex flex-col gap-8 px-20 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Categories</h1>
          <ul className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Card key={category}>
                <CardHeader>{category}</CardHeader>
              </Card>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="w-full text-xl font-semibold">Just for you</h1>
          <ul className="flex flex-wrap gap-4">
            {items.map((item) => (
              <Card key={item.id} className="flex h-72 w-52 flex-col">
                <CardHeader>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-full object-contain"
                  />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-md line-clamp-2 text-wrap font-medium">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-md font-medium text-orange-500">
                    ${item.price}
                  </CardDescription>
                </CardContent>
                <CardFooter className="text-xs text-gray-500">
                  Rating: {item.rating.rate}/5 ({item.rating.count})
                </CardFooter>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
