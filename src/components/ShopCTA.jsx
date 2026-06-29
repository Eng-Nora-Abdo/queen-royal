import { Link } from "react-router-dom";

function ShopCTA() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-6">
          Ready to Feel Like a Queen?
        </h2>

        <p className="text-gray-500 text-lg mb-10">
          Discover our beautiful collection and find your favorite products.
        </p>

        <Link to="/products">
          <button className="px-10 py-4 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </Link>

      </div>
    </section>
  );
}

export default ShopCTA;