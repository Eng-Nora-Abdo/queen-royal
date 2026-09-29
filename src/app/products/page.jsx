"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";

export default function ProductsPage() {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [offersOnly, setOffersOnly] = useState(false);

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

      {/* HEADER */}
      <section className="pt-32 pb-10 text-center px-6">
        <h1 className="text-5xl font-serif text-pink-600 mb-5">
          Our Collection
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-pink-200 px-4 py-2 rounded-full w-72 focus:outline-pink-400 bg-white"
        />

        {/* FILTERS */}
        <div className="mt-5 flex justify-center gap-3 flex-wrap">

          <button
            onClick={() => setCategory("All")}
            className={`px-4 py-2 rounded-full cursor-pointer transition ${
              category === "All"
                ? "bg-pink-500 text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setCategory("Body Splash")}
            className={`px-4 py-2 rounded-full cursor-pointer transition ${
              category === "Body Splash"
                ? "bg-pink-500 text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
            }`}
          >
            Body Splash
          </button>

          <button
            onClick={() => setCategory("Accessories")}
            className={`px-4 py-2 rounded-full cursor-pointer transition ${
              category === "Accessories"
                ? "bg-pink-500 text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
            }`}
          >
            Accessories
          </button>

          <button
            onClick={() => setCategory("Offers")}
            className={`px-4 py-2 rounded-full cursor-pointer transition ${
              category === "Offers"
                ? "bg-pink-500 text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
            }`}
          >
            Offers
          </button>

          <button
            onClick={() => setOffersOnly(!offersOnly)}
            className={`px-4 py-2 rounded-full cursor-pointer transition ${
              offersOnly
                ? "bg-pink-500 text-white"
                : "border border-pink-200 bg-white text-gray-700 hover:bg-pink-50"
            }`}
          >
            Offers Only
          </button>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredProducts.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No products found.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                category={product.category}
                size={product.size}
                price={product.price}
                onAddToCart={addToCart}
              />
            ))
          )}

        </div>
      </section>
    </div>
  );
}
