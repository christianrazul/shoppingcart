import { Card, CardHeader } from "./ui/card";
import { useEffect, useState } from "react";

interface CategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Categories = ({ onSelectCategory }: CategoriesProps) => {
  const [categories, setCategories] = useState([""]);

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
