
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02] glass-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-beauty-500 font-semibold tracking-wider uppercase">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-tight tracking-tight">
          {name}
        </h3>
        <p className="mt-1 text-beauty-800 font-medium">${price.toFixed(2)}</p>
        <div
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button className="w-full mt-4 bg-beauty-500 hover:bg-beauty-600">
            Quick View
          </Button>
        </div>
      </div>
    </Card>
  );
};
