import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  // 1️⃣ تحميل أولي من localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 2️⃣ حفظ تلقائي كل ما cart يتغير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // إضافة منتج
  const addToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) =>
        item.name === product.name &&
        item.size === product.size
    );

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name &&
          item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  // حذف
  const removeFromCart = (product) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(
            item.name === product.name &&
            item.size === product.size
          )
      )
    );
  };

  // زيادة
  const increaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === product.name &&
        item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // تقليل
  const decreaseQuantity = (product) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.name === product.name &&
          item.size === product.size
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