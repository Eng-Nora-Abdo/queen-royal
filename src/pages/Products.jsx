import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { productPrices } from "../data/productPrices";

const images = import.meta.glob("../assets/products/**/*.{jpg,png,jpeg}", {
  eager: true,
  import: "default",
});

const products = Object.entries(images).map(([path, image], index) => {
  const isBody = path.includes("body-splash");
  const isOffer = path.includes("offers");

  let category = "Accessories";

  if (isBody) category = "Body Splash";
  if (isOffer) category = "Offers";

  let name = path
    .split("/")
    .pop()
    .replace(/\.(jpg|png|jpeg)/, "");

  let size = "Free Size";

  // السعر من الداتا
  let price = productPrices[name];

  // fallback
  if (!price) price = 180;

  // Body Splash rules
  if (isBody) {
    if (name.includes("5ml")) {
      size = "Package (6 × 5 ml)";
      price = 90;
    } else if (name.includes("10ml")) {
      size = "Package (6 × 10 ml)";
      price = 190;
    } else if (name.includes("120ml")) {
      size = "120 ml";
      price = 140;
    } else if (name.includes("150ml")) {
      size = "150 ml";
      price = 180;
    } else if (name.includes("220ml")) {
      size = "220 ml";
      price = 230;
    } else if (name.includes("250ml")) {
      size = "250 ml";
      price = 280;
    }
  }

  return {
    id: index + 1,
    image,
    name,
    size,
    category,
    price,
    isOffer,
  };
});

function Products() {
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
          className="border border-pink-200 px-4 py-2 rounded-full w-72"
        />

        {/* FILTERS */}
        <div className="mt-5 flex justify-center gap-3 flex-wrap">

          <button
            onClick={() => setCategory("All")}
            className={category === "All"
              ? "bg-pink-500 text-white px-4 py-2 rounded-full"
              : "border px-4 py-2 rounded-full"}
          >
            All
          </button>

          <button
            onClick={() => setCategory("Body Splash")}
            className={category === "Body Splash"
              ? "bg-pink-500 text-white px-4 py-2 rounded-full"
              : "border px-4 py-2 rounded-full"}
          >
            Body Splash
          </button>

          <button
            onClick={() => setCategory("Accessories")}
            className={category === "Accessories"
              ? "bg-pink-500 text-white px-4 py-2 rounded-full"
              : "border px-4 py-2 rounded-full"}
          >
            Accessories
          </button>

          <button
            onClick={() => setCategory("Offers")}
            className={category === "Offers"
              ? "bg-pink-500 text-white px-4 py-2 rounded-full"
              : "border px-4 py-2 rounded-full"}
          >
            Offers
          </button>

          <button
            onClick={() => setOffersOnly(!offersOnly)}
            className={offersOnly
              ? "bg-pink-500 text-white px-4 py-2 rounded-full"
              : "border px-4 py-2 rounded-full"}
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

export default Products;