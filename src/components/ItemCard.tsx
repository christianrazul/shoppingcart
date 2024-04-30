import { Item } from "@/pages/ShopPage";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useState } from "react";

interface ItemCardProps {
  item: Item;
  onAddToCart: (item: Item, quantity: number) => void;
}

const ItemCard = ({ item, onAddToCart }: ItemCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event: any) => {
    setQuantity(Number(event.target.value));
  };

  const handleClick = () => {
    onAddToCart(item, quantity);
  };

  return (
    <Dialog key={item.id}>
      <DialogTrigger asChild>
        <Card className="flex h-72 w-52 flex-col">
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
              <p className="font-semibold text-orange-500">${item.price}</p>
              <p className="font-normal text-gray-500">
                {item.rating.rate} ({item.rating.count})
              </p>
            </div>
          </div>
          <ScrollArea className="h-20 text-sm">{item.description}</ScrollArea>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="number"
              placeholder="Quantity"
              value={quantity}
              min={1}
              onChange={handleChange}
            />
            <Button type="submit" onClick={handleClick}>
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ItemCard;
