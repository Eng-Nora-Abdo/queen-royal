"use client";

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
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all fields (Name, Phone, Address)");
      return;
    }
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
        required
        className="w-full p-3 border border-pink-200 rounded-xl focus:outline-pink-400"
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full p-3 border border-pink-200 rounded-xl focus:outline-pink-400"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
        rows={4}
        className="w-full p-3 border border-pink-200 rounded-xl focus:outline-pink-400"
      />

      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition font-medium cursor-pointer"
      >
        Confirm Order
      </button>
    </form>
  );
}

export default CheckoutForm;