import { Card, CardHeader } from "./ui/card";

interface CategoriesProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Categories = ({ categories, onSelectCategory }: CategoriesProps) => {
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
