import { useState } from "react";

function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-3xl shadow-md border border-pink-100 space-y-4"
    >
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl"
      />

      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600"
      >
        Confirm Order
      </button>
    </form>
  );
}

export default CheckoutForm;