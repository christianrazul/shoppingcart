import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Popover } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
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
    <div className="flex w-full flex-col">
      <NavBar />
      <div className="flex flex-col gap-8 bg-gray-100 px-20 pt-4 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
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
          <ul className="flex w-full flex-wrap gap-4">
            {items.map((item) => (
              <Dialog>
                <DialogTrigger asChild>
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
                </DialogTrigger>
                <DialogContent className="w-80 rounded-lg border bg-white p-4 shadow-md">
                  <div className="flex flex-col space-y-4 p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full object-contain"
                    />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <div className="flex justify-between">
                        <p className="font-semibold text-orange-500">
                          ${item.price}
                        </p>
                        <p className="font-normal text-gray-500">
                          {item.rating.rate} ({item.rating.count})
                        </p>
                      </div>
                    </div>
                    <ScrollArea className="h-20 text-sm">
                      {item.description}
                    </ScrollArea>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input type="number" placeholder="Quantity" />
                      <Button type="submit">Add to Cart</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
