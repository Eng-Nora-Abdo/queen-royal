"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // 1️⃣ تحميل أولي من localStorage بعد اكتمال الـ Mount في العميل لتجنب مشكلة الـ Hydration Mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    setIsHydrated(true);
  }, []);

  // 2️⃣ حفظ تلقائي كل ما cart يتغير بعد التحميل
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    }
  }, [cartItems, isHydrated]);

  // إضافة منتج
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (item) => item.name === product.name && item.size === product.size
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.name === product.name && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // حذف
  const removeFromCart = (product) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.name === product.name && item.size === product.size)
      )
    );
  };

  // زيادة
  const increaseQuantity = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === product.name && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // تقليل
  const decreaseQuantity = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === product.name && item.size === product.size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}