
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Skincare", "Makeup", "Fragrance", "Tools"];

const products = [
  {
    id: 1,
    name: "Radiant Skin Serum",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Skincare",
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Rose Garden Perfume",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    category: "Fragrance",
  },
  // Add more products as needed
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-beauty-50 to-cream-50">
      <header className="py-16 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-beauty-900 mb-4">
          Discover Your Beauty
        </h1>
        <p className="text-lg text-beauty-600 max-w-2xl mx-auto px-4">
          Explore our curated collection of premium beauty products
        </p>
      </header>

      <main className="container px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-beauty-500 hover:bg-beauty-600"
                  : "hover:bg-beauty-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-fadeIn">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center text-beauty-600 border-t border-beauty-100">
        <p>© 2024 Beauty Products. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
