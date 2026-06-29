import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

import pink5 from "../assets/products/pink-dream-5ml.jpg";
import pink10 from "../assets/products/pink-dream-10ml.jpg";
import pink120 from "../assets/products/pink-dream-120ml.jpg";
import pink150 from "../assets/products/pink-dream-150ml.jpg";
import pink220 from "../assets/products/pink-dream-220ml.jpg";
import pink250 from "../assets/products/pink-dream-250ml.jpg";

function Products() {
  const { addToCart } = useCart(); // ⭐ المهم

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [offersOnly, setOffersOnly] = useState(false);

  const products = [
    {
      image: pink5,
      name: "Pink Dream Body Splash",
      size: "Pack of 6 • 5 ml",
      category: "Body Splash",
      price: 90,
      isOffer: true,
    },
    {
      image: pink10,
      name: "Pink Dream Body Splash",
      size: "Pack of 6 • 10 ml",
      category: "Body Splash",
      price: 190,
      isOffer: true,
    },
    {
      image: pink120,
      name: "Pink Dream Body Splash",
      size: "120 ml",
      category: "Body Splash",
      price: 140,
      isOffer: false,
    },
    {
      image: pink150,
      name: "Pink Dream Body Splash",
      size: "150 ml",
      category: "Body Splash",
      price: 180,
      isOffer: false,
    },
    {
      image: pink220,
      name: "Pink Dream Body Splash",
      size: "220 ml",
      category: "Body Splash",
      price: 230,
      isOffer: false,
    },
    {
      image: pink250,
      name: "Pink Dream Body Splash",
      size: "250 ml",
      category: "Body Splash",
      price: 280,
      isOffer: false,
    },
  ];

  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .filter((p) =>
      offersOnly ? p.isOffer : true
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">

      {/* UI same */}

      <section className="pt-32 pb-14 text-center px-6">
        <h1 className="text-5xl font-serif text-pink-600 mb-5">
          Our Collection
        </h1>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              category={product.category}
              size={product.size}
              price={product.price}
              onAddToCart={addToCart}   // ⭐ هنا الربط الحقيقي
            />
          ))}

        </div>
      </section>
    </div>
  );
}

export default Products;