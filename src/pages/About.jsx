import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import aboutImg from "../assets/about/about.jpg";

import OurStory from "../components/OurStory";
import WhyChooseUs from "../components/WhyChooseUs";
import ReviewsSlider from "../components/ReviewsSlider";
import ShopCTA from "../components/ShopCTA";

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100vh] md:h-screen overflow-hidden">

        {/* Background (BEST PRACTICE FIX) */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${aboutImg})` }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 md:px-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl text-white"
          >

            <p className="uppercase tracking-[5px] text-pink-200 mb-4 font-medium">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
              Welcome to
              <span className="text-pink-300"> Queen Royal</span>
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-100">
              Queen Royal is a feminine beauty brand created to make every girl
              feel confident, elegant, and special.
            </p>

            <Link to="/products">
              <button className="mt-10 px-8 py-4 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                Explore Collection
              </button>
            </Link>

          </motion.div>
        </div>
      </section>

      <OurStory />
      <WhyChooseUs />
      <ReviewsSlider />
      <ShopCTA />
    </>
  );
};

export default About;