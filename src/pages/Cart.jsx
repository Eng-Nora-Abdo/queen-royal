import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 pt-32 pb-20 px-6">

      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-serif text-pink-600 mb-4">
          Shopping Cart
        </h1>

        <p className="text-gray-500">
          Review your products before checkout.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty 🛍️
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[32px] p-6 shadow-md border border-pink-100 flex flex-col md:flex-row items-center gap-6"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-contain rounded-3xl bg-pink-50 p-2"
                  />

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {item.size}
                    </p>

                    <p className="text-pink-600 font-semibold text-lg mt-3">
                      {item.price} EGP
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item)}
                      className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100"
                    >
                      <FaMinus />
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item)}
                      className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 hover:text-red-600 text-xl"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-10 bg-white rounded-[32px] p-8 shadow-md border border-pink-100">
              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span className="text-pink-600">
                  {total} EGP
                </span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-8 py-4 rounded-full bg-pink-500 text-white text-lg font-medium hover:bg-pink-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;