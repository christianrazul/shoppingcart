import ItemGallery from "@/components/ItemGallery";
import NavBar from "@/components/NavBar";
import { useParams } from "react-router-dom";

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

export interface CartItem extends Item {
  quantity: number;
}

const ShopPage = () => {
  const params = useParams();

  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="flex h-full flex-col gap-8 bg-gray-100 px-20 pt-4 md:px-24 lg:px-32 xl:px-48 2xl:px-96">
        <ItemGallery category={params.category} />
      </div>
    </div>
  );
};

export default ShopPage;
