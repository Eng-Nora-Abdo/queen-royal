import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white border-t border-pink-100 pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif text-pink-600 mb-4">
            Queen Royal 
          </h2>

          <p className="text-gray-500 leading-7">
            Queen Royal is your destination for feminine beauty essentials,
            featuring body splashes, perfumes, and elegant accessories designed
            to make every girl feel confident and beautiful.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-500">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-pink-500 transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-pink-500 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Collections
          </h3>

          <ul className="space-y-3 text-gray-500">
            <li>Body Splash</li>
            <li>Perfumes</li>
            <li>Accessories</li>
            <li>Skincare (Coming Soon)</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>

          <p className="text-gray-500 mb-5">
            Stay connected and discover our latest collections.
          </p>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://www.instagram.com/queen_royal.207?igsh=MTRncTVtd2gxYTlhYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://vt.tiktok.com/ZSCUfqr6x/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-black transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://chat.whatsapp.com/HvZEiTdO6Lm4mfRhcczzau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-pink-100 mt-14 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Queen Royal. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;