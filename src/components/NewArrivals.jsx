import bodySplash from "../assets/products/p1.jpg";
import cream from "../assets/products/p2.jpg";
import bracelet from "../assets/products/p3.jpg";

const products = [
  {
    id: 1,
    image: bodySplash,
    name: "BodySplash"
  },
  {
    id: 2,
    image: cream,
    name: "jewelry"
  },
  {
    id: 3,
    image: bracelet,
    name: "Stainless Bracelet"
  },
];

function NewArrivals() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-pink-600">
          New Arrivals
        </h2>
        <p className="text-gray-500 mt-3">
          Fresh picks made for your Queen vibe 
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <button className="mt-4 px-5 py-2 rounded-full border border-pink-300 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                View Product
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default NewArrivals;