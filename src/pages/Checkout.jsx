import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (data) => {
    const phoneNumber = "201022603220"; 

    const itemsText = cartItems
      .map(
        (item) =>
          `- ${item.name} (${item.size}) x${item.quantity} = ${
            item.price * item.quantity
          } EGP`
      )
      .join("\n");

    const message = `
🛍️ New Order

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📍 Address: ${data.address}

🧾 Order:
${itemsText}

💰 Total: ${total} EGP
`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50 pt-32 px-6 pb-20">
      
      {/* Title */}
      <h1 className="text-5xl font-serif text-center mb-10 text-pink-600">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-3xl shadow-md border border-pink-100 h-fit md:sticky md:top-28">
          <h2 className="text-xl font-semibold mb-6">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty 🛍️</p>
          ) : (
            <>
              {cartItems.map((item, i) => (
                <div key={i} className="flex justify-between mb-4">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-400">
                      {item.size} × {item.quantity}
                    </p>
                  </div>

                  <span className="text-pink-600 font-semibold">
                    {item.price * item.quantity} EGP
                  </span>
                </div>
              ))}

              <hr className="my-4" />

              <h3 className="text-lg font-bold text-pink-600">
                Total: {total} EGP
              </h3>
            </>
          )}
        </div>

        {/* Form */}
        <CheckoutForm onSubmit={handleOrder} />
      </div>
    </div>
  );
}

export default Checkout;