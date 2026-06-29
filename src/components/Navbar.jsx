import { Link, useLocation } from "react-router-dom";
import { FaCrown, FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { cartItems } = useCart();

  // الصفحات اللي لونها Pink Theme
  const isPinkPage =
    location.pathname === "/products" ||
    location.pathname === "/cart" ||
    location.pathname === "/checkout"; // ⭐ إضافة checkout هنا

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-transparent">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center transition-transform hover:scale-105">
            <FaCrown className="text-pink-500 text-xl" />
          </div>

          <span
            className={`text-2xl font-serif font-semibold tracking-wide ${
              isPinkPage ? "text-pink-500" : "text-white"
            }`}
          >
            Queen Royal
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition duration-300 ${
                isPinkPage
                  ? "text-pink-500 hover:text-pink-600"
                  : "text-white hover:text-pink-300"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Cart */}
          <Link to="/cart" className="relative text-xl">
            <FaShoppingBag
              className={`transition ${
                isPinkPage
                  ? "text-pink-500 hover:text-pink-600"
                  : "text-white hover:text-pink-300"
              }`}
            />

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white text-[11px] flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/cart" className="relative text-xl">
            <FaShoppingBag
              className={`transition ${
                isPinkPage ? "text-pink-500" : "text-white"
              }`}
            />

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white text-[11px] flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>

          <button
            className={`text-2xl transition ${
              isPinkPage ? "text-pink-500" : "text-white"
            }`}
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72
        bg-white/10
        backdrop-blur-xl
        border-l border-white/20
        shadow-2xl
        z-50
        flex flex-col items-center justify-center gap-8
        transition-all duration-300 ease-out
        ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Close */}
        <button
          className={`absolute top-6 right-6 text-2xl transition ${
            isPinkPage ? "text-pink-500" : "text-white"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <FaTimes />
        </button>

        {[
          { to: "/", label: "Home" },
          { to: "/products", label: "Products" },
          { to: "/about", label: "About" },
          { to: "/cart", label: "Cart" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className={`text-lg font-medium transition ${
              isPinkPage
                ? "text-pink-500 hover:text-pink-600"
                : "text-white hover:text-pink-300"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;