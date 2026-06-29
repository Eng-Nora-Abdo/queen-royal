import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import review1 from "../assets/reviews/review1.jpg";
import review2 from "../assets/reviews/review2.jpg";
import review3 from "../assets/reviews/review3.jpg";
import review4 from "../assets/reviews/review4.jpg";
import review5 from "../assets/reviews/review5.jpg";
import review6 from "../assets/reviews/review6.jpg";
import review7 from "../assets/reviews/review7.jpg";
import review8 from "../assets/reviews/review8.jpg";
import review9 from "../assets/reviews/review9.jpg";
import review10 from "../assets/reviews/review10.jpg";
import review11 from "../assets/reviews/review11.jpg";
import review12 from "../assets/reviews/review12.jpg";

const reviews = [
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10,
  review11,
  review12,
];

function ReviewsSlider() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600">
            What Our Queens Say 
          </h2>

          <p className="text-gray-500 mt-3">
            Reviews from our lovely customers
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-3xl shadow-lg">
                <img
                  src={review}
                  alt={`Review ${index + 1}`}
                  className="w-full max-h-[700px] object-contain rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewsSlider;