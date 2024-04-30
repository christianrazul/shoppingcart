import { Card, CardHeader } from "./ui/card";
import { useEffect, useState } from "react";

interface CategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Categories = ({ onSelectCategory }: CategoriesProps) => {
  const [categories, setCategories] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data
  useEffect(() => {
    setIsLoading(true);

    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
      );
      if (!response.ok) {
        throw new Error("Categories unavailable.");
      }
      const categories = await response.json();
      setCategories(categories);
      setIsLoading(false);
    };

    fetchCategories().catch((error) =>
      console.error("Fetching categories failed:", error),
    );
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <ul className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <Card key={category}>
          <CardHeader onClick={() => onSelectCategory(category)}>
            {category}
          </CardHeader>
        </Card>
      ))}
    </ul>
  );
};

export default Categories;
