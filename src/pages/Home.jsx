import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import NewArrivals from "../components/NewArrivals";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <div className="min-h-screen bg-rose-50 dark:bg-slate-900 transition-colors duration-300">
      <Hero />
      
      <FeaturedSection />
      <NewArrivals />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;