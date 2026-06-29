import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/hero/img1.jpg";
import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";
import img4 from "../assets/hero/img4.jpg";
import img5 from "../assets/hero/img5.jpg";
import img6 from "../assets/hero/img6.jpg";
import img7 from "../assets/hero/img7.jpg";
import img8 from "../assets/hero/img8.jpg";

const slides = [
  {
    image: img1,
    title: "Reveal Your Radiant Elegance",
    text: "Luxury beauty that makes you shine every day.",
  },
  {
    image: img2,
    title: "Timeless Beauty Collection",
    text: "Discover skincare crafted for modern queens.",
  },
  {
    image: img3,
    title: "Glow With Confidence",
    text: "Premium products inspired by elegance.",
  },
  {
    image: img4,
    title: "Beauty Meets Luxury",
    text: "Every detail designed for your royal routine.",
  },
  {
    image: img5,
    title: "A Touch of Soft Glam",
    text: "Feel confident, feminine and beautiful.",
  },
  {
    image: img6,
    title: "Royal Self Care",
    text: "Because you deserve luxurious moments.",
  },
  {
    image: img7,
    title: "Elegance In Every Drop",
    text: "Premium fragrances and skincare essentials.",
  },
  {
    image: img8,
    title: "Designed For Queens",
    text: "Beauty products that celebrate your uniqueness.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedText, setTypedText] = useState("");

  const navigate = useNavigate();

  // Slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  // Typing Effect
  useEffect(() => {
    setTypedTitle("");
    setTypedText("");

    const title = slides[current].title;
    const text = slides[current].text;

    let i = 0;
    let j = 0;

    const titleInterval = setInterval(() => {
      if (i < title.length) {
        setTypedTitle(title.slice(0, i + 1));
        i++;
      }
    }, 45);

    let textInterval;

    const textTimeout = setTimeout(() => {
      textInterval = setInterval(() => {
        if (j < text.length) {
          setTypedText(text.slice(0, j + 1));
          j++;
        }
      }, 25);
    }, title.length * 45);

    return () => {
      clearInterval(titleInterval);
      clearInterval(textInterval);
      clearTimeout(textTimeout);
    };
  }, [current]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 scale-110 transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 max-w-5xl leading-tight">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-lg md:text-2xl max-w-3xl mb-10 text-gray-100">
          {typedText}
        </p>

        <button
          onClick={() => navigate("/products")}
          className="px-10 py-4 rounded-full bg-pink-500 text-white shadow-lg transition-all duration-300 hover:bg-pink-600 hover:scale-105"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}