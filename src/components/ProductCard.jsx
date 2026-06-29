import { useCart } from "../context/CartContext";

function ProductCard({
  image,
  name,
  category,
  size,
  price,
}) {
  const { addToCart } = useCart();

  const product = {
    image,
    name,
    category,
    size,
    price,
  };

  return (
    <div className="bg-white p-5 rounded-[32px] shadow-md border border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <div className="bg-pink-50 rounded-3xl p-5">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-contain"
        />
      </div>

      {/* Product Info */}
      <h3 className="mt-6 text-xl font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        {category}
      </p>

      {/* Size */}
      <div className="mt-4">
        <span className="inline-block px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm font-medium">
          {size}
        </span>
      </div>

      {/* Price */}
      <p className="mt-5 text-3xl font-bold text-pink-600">
        {price} EGP
      </p>

      {/* Add To Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-6 w-full py-3 rounded-full bg-pink-500 text-white font-medium hover:bg-pink-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;